const app = require("./app");
const connectDatabase = require("./config/database");
const env = require("./config/env");
const cacheService = require("./services/cacheService");

let server;

async function shutdown(signal) {
  console.log(`${signal} received. Shutting down.`);

  if (server) {
    await new Promise((resolve) => server.close(resolve));
  }

  await cacheService.shutdown();
  process.exit(0);
}

async function startServer() {
  await connectDatabase();
  await cacheService.initialize();

  server = app.listen(env.port, () => {
    console.log(`Study Abroad Platform API running on port ${env.port}`);
    console.log(`Cache provider: ${cacheService.getProvider()}`);
  });
}

process.on("SIGINT", () => {
  shutdown("SIGINT").catch((error) => {
    console.error("Failed to shutdown cleanly", error);
    process.exit(1);
  });
});

process.on("SIGTERM", () => {
  shutdown("SIGTERM").catch((error) => {
    console.error("Failed to shutdown cleanly", error);
    process.exit(1);
  });
});

startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});

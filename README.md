# Step Abroad

> Backend REST API for a university discovery and student application management platform.

Students can search universities, get personalized program recommendations, and track their full application lifecycle — from draft to enrollment.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Runtime | Node.js 20 + Express 4 |
| Database | MongoDB + Mongoose |
| Auth | JWT + bcrypt |
| Caching | In-memory TTL Map (Redis-ready) |
| Testing | Jest + Supertest |

---

## Key Features

- **JWT Auth** — register, login, role-based access (student / counselor)
- **Recommendation Engine** — built entirely on MongoDB aggregation pipeline with weighted scoring across country, field, budget, intake, and IELTS score
- **Application Lifecycle** — strict FSM-based status transitions (draft → submitted → under review → offer received → visa processing → enrolled / rejected) with full audit trail
- **University & Program Discovery** — filter by country, degree, field, budget, intake, scholarship with pagination and sorting
- **TTL Caching** — in-memory cache on high-read endpoints (popular universities, recommendations, dashboard). Configurable TTL via env
- **Compound Indexing** — duplicate applications prevented at DB level via `{student, program, intake}` unique index
- **Automated Tests** — registration, duplicate prevention, login, wrong password, protected route auth

---

## Architecture Decisions

### Recommendation Engine
Scoring and filtering happen entirely inside MongoDB's aggregation pipeline — no in-memory JS scoring. Scales with data.

| Signal | Weight |
|---|---|
| Country match | +35 |
| Field match | +30 |
| Within budget | +20 |
| Preferred intake available | +10 |
| IELTS score meets minimum | +5 |

### Caching Strategy
High-read, low-write endpoints use a TTL-based in-memory Map. Designed as a drop-in replacement for Redis — only `cacheService.js` needs to change.

### Application Status Transitions
Valid transitions are defined in `config/constants.js`. Every status update is validated against this map — no skipping steps, no invalid rollbacks. Each change appends to a `timeline` array.

---

## Project Structure

```
backend/
├── src/
│   ├── config/          # DB, env validation, constants
│   ├── controllers/     # Request/response logic
│   ├── middleware/      # Auth, error handler, 404
│   ├── models/          # Student, University, Program, Application
│   ├── routes/          # Express routers
│   ├── services/        # Recommendation engine, cache
│   ├── utils/           # asyncHandler, HttpError
│   ├── scripts/         # DB seed script
│   ├── tests/           # Jest test suites
│   ├── app.js
│   └── server.js
```

---

## Getting Started

```bash
git clone https://github.com/Ishant8287/study-abroad-platform
cd backend
npm install
cp .env.example .env
npm run seed
npm run dev
```

### Environment Variables

| Variable | Description | Default |
|---|---|---|
| PORT | Server port | 4000 |
| MONGODB_URI | MongoDB connection string | mongodb://127.0.0.1:27017/study-abroad |
| JWT_SECRET | Required in production | — |
| JWT_EXPIRES_IN | Token expiry | 1d |
| CACHE_TTL_SECONDS | Cache TTL | 300 |

### Test Credentials (after seed)

- Student: `aarav@example.com` / `Candidate123!`
- Counselor: `counselor@example.com` / `Candidate123!`

---

## API Reference

### Auth
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | /api/auth/register | No | Register new user |
| POST | /api/auth/login | No | Login |
| GET | /api/auth/me | Yes | Get own profile |

### Universities
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | /api/universities | No | List with filters + pagination |
| GET | /api/universities/popular | No | Top 6 by popularity (cached) |

### Programs
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | /api/programs | Yes | Filter by country, field, degree, budget, intake |

### Recommendations
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | /api/recommendations/me | Yes | Top 5 matches for signed-in student |
| GET | /api/recommendations/:studentId | Yes | Top 5 matches by student ID |

### Applications
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | /api/applications | Yes | Apply to a program |
| GET | /api/applications | Yes | List with filters |
| PATCH | /api/applications/:id/status | Yes | Update status (strict transition enforcement) |

### Dashboard
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | /api/dashboard/overview | Yes | Stats + status breakdown + top countries (cached) |

---

## Running Tests

```bash
npm test
```

---

## What I'd Improve

- Replace in-memory cache with Redis for multi-instance support
- Add Zod validation on all request bodies
- Refresh token rotation with httpOnly cookies
- Rate limiting on auth endpoints
- Full RBAC — counselors manage any student's application, students only their own

---

## License

MIT

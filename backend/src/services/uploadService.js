const cloudinary = require("cloudinary").v2;
const env = require("../config/env");

let configured = false;

function ensureConfigured() {
  if (configured) return;

  if (!env.cloudinaryCloudName || !env.cloudinaryApiKey || !env.cloudinaryApiSecret) {
    throw new Error(
      "Cloudinary is not configured. Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET."
    );
  }

  cloudinary.config({
    cloud_name: env.cloudinaryCloudName,
    api_key: env.cloudinaryApiKey,
    api_secret: env.cloudinaryApiSecret,
  });

  configured = true;
}

/**
 * Upload a file buffer to Cloudinary.
 *
 * @param {Buffer} fileBuffer - The raw file data.
 * @param {string} originalName - Original file name (used for public_id).
 * @param {string} folder - Cloudinary folder (e.g. "study-abroad/documents").
 * @returns {Promise<{ url: string, publicId: string }>}
 */
function uploadToCloudinary(fileBuffer, originalName, folder = "study-abroad/documents") {
  ensureConfigured();

  return new Promise((resolve, reject) => {
    const baseName = originalName.replace(/\.[^/.]+$/, ""); // strip extension
    const publicId = `${folder}/${baseName}-${Date.now()}`;

    const uploadStream = cloudinary.uploader.upload_stream(
      {
        public_id: publicId,
        resource_type: "auto",
        folder: undefined, // already baked into public_id
      },
      (error, result) => {
        if (error) return reject(error);
        resolve({
          url: result.secure_url,
          publicId: result.public_id,
        });
      }
    );

    uploadStream.end(fileBuffer);
  });
}

/**
 * Delete a file from Cloudinary.
 *
 * @param {string} publicId - The Cloudinary public_id to delete.
 */
async function deleteFromCloudinary(publicId) {
  ensureConfigured();
  await cloudinary.uploader.destroy(publicId);
}

module.exports = {
  uploadToCloudinary,
  deleteFromCloudinary,
};

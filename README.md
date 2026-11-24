# PDF TO QR

Run `npm install`, `npm run build`, then `npm start`. In another terminal run `node tests/smoke.mjs`. Set TEST_BASE_URL to test another deployment.

Production storage: public Vercel Blob via BLOB_READ_WRITE_TOKEN. 4 MB maximum. Anyone with a document link can access it. The upload route checks file signatures and applies a best-effort per-instance limit of five requests per minute; this is not a distributed quota or malware scanner. Configure Vercel firewall rate limits or a shared rate-limit service before a public launch. No automatic file expiry is enabled; review storage regularly and establish a retention policy before distributing QR codes. Do not delete previously shared files without notifying users. Local storage uses UPLOAD_DIR and PUBLIC_BASE_URL.

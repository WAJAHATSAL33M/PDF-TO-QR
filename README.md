# PDF TO QR

Next.js PDF QR generator. Run `npm install` and `npm run dev`.

Production: connect a public Vercel Blob store, which supplies BLOB_READ_WRITE_TOKEN. PDFs are accessible to anyone with their link. Server uploads are limited to 4 MB. Local Node.js development can use UPLOAD_DIR and PUBLIC_BASE_URL. Never commit credentials. Configure abuse prevention, upload quotas and retention before opening public uploads.

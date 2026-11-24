# PDF TO QR

Next.js application for sharing PDF documents through customizable QR codes.

Development: `npm install` then `npm run dev`.

Uploads use local persistent storage for Node.js self-hosting. Configure `PUBLIC_BASE_URL` to your public HTTPS origin and `UPLOAD_DIR` to a persistent writable directory. Do not deploy local storage to ephemeral serverless instances. Uploaded documents are public to anyone with the link. Production requires abuse controls, quotas and a retention policy.

# Vercel Workflow

1. Push to `main`.
2. Vercel builds the app from the repo.
3. Cron validates `/api/cron/validate` every 5 minutes.
4. Use the sandbox route to confirm the clone is still aligned.
5. Use deployment inspection before announcing release.

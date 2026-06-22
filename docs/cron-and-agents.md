# Cron and Agents

## Cron
- Vercel cron hits `/api/cron/validate` every 5 minutes.
- The endpoint returns health and scaffold readiness.

## Agent validation
- agents should open `/sandbox`
- agents should verify the upload flow
- agents should confirm the selected swatch state changes
- agents should confirm the build passes before publish

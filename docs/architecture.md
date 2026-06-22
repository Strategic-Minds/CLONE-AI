# Architecture

## Surface
- `app/page.tsx`: primary enterprise clone UI
- `app/sandbox/page.tsx`: sandbox validation view
- `app/api/visualize/route.ts`: lightweight visualize endpoint
- `app/api/cron/validate/route.ts`: 5-minute verification hook

## Goals
- preserve the approved visual system
- keep clone workflows deterministic
- allow validation before publish
- remain Vercel-compatible

## Boundaries
- no secret material in the repo
- no hidden state as source of truth
- no undefined runtime dependencies

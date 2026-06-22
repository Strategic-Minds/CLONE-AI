# Sandbox Validation

The sandbox must:
- open without errors
- render the approved structure
- expose the same controls as the main app
- allow image upload
- keep the floor preview deterministic
- be suitable for automated parity checks

Validation steps:
1. load `/sandbox`
2. run the 5-minute cron check
3. compare the visible layout to the approved reference
4. confirm the app build passes

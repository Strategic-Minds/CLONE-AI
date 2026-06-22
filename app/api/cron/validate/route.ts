import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    checks: [
      "route availability",
      "sandbox route",
      "visualizer scaffold",
      "deployment readiness",
    ],
    timestamp: new Date().toISOString(),
  });
}

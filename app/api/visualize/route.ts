import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const room = body.room || "Garage";
  const system = body.system || "Domino";
  const finish = body.finish || "High Gloss";

  return NextResponse.json({
    recommendation: `${system} pairs well with a ${finish.toLowerCase()} finish for a ${String(room).toLowerCase()} visualizer flow.`,
  });
}

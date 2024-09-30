import { NextResponse } from 'next/server';

// Health check handler
export async function GET() {
  // Perform any health checks if necessary
  return NextResponse.json({ status: 'ok' });
}

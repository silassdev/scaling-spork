import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Process contact form data here (e.g., send email, save to DB)
    return NextResponse.json({ success: true, message: 'Contact submitted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error processing request' }, { status: 500 });
  }
}
import { NextResponse } from "next/server";
import resumeData from "@/lib/resume-data";

export async function GET() {
  return NextResponse.json(resumeData);
}
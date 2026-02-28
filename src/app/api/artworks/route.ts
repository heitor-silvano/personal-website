import { ArtworkService } from "@/app/services/artwork.service";
import { NextResponse } from "next/server";


export async function GET() {
  const data = await ArtworkService.list();
  return NextResponse.json(data)
}

export async function POST(req: Request) { 
  const body = await req.json();
  await ArtworkService.create(body)
  return NextResponse.json({ok: true})
}
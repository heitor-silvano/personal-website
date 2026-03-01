import { ArtworkService } from "@/app/services/artwork.service";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, {params}: {params: Promise<{id: string}>}) { 
  const body = await request.json();
  const { id } = await params
  await ArtworkService.update(+id, body)
  return NextResponse.json({ok: true})
}
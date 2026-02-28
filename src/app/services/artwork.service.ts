import { db } from '@/app/db/client'
import { artworks } from '../db/schema/artworks'

export class ArtworkService {
   static async list() {
    return db.select().from(artworks)
  }

  static async create(data: {
    title: string
    imageUrl: string
    description?: string
  }) {
    return db.insert(artworks).values(data)
  }
}
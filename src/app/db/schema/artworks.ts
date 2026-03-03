import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const artworks = pgTable("artworks", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  description: text("description")
})
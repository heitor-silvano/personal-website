import { sqliteTable,text, integer } from "drizzle-orm/sqlite-core";

export const artworks = sqliteTable("artworks", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  description: text("description")
})
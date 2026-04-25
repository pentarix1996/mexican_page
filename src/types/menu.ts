import { z } from "zod";

export const MenuItemSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  tags: z.array(z.enum(["picante", "vegetariano", "recomendado"])).default([]),
});

export const CategorySchema = z.object({
  id: z.string(),
  name: z.string(),
  items: z.array(MenuItemSchema),
});

export const MenuSchema = z.object({
  categories: z.array(CategorySchema),
});

export type MenuItem = z.infer<typeof MenuItemSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Menu = z.infer<typeof MenuSchema>;
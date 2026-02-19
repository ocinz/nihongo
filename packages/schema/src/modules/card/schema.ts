import z from "zod";

export const cardSchema = z.object({
	id: z.uuidv7(),
	front_text: z.string(),
	back_text: z.string(),
	example: z.string().optional(),
});

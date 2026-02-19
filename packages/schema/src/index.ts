import z from "zod";

export type { LoginInput, RegisterInput } from "./modules/auth/schema.js";
export {
	loginSchema,
	registerFESchema,
	registerSchema,
} from "./modules/auth/schema.js";
export { cardSchema } from "./modules/card/schema.js";
export const paramSchema = z.object({ id: z.uuidv7() });

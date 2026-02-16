import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import {
	type AuthVariables,
	authMiddleware,
} from "../../middleware/authMiddleware.js";
import { createUnitSchema, updateUnitSchema } from "./schema.js";
import { createunit, deleteUnits, getUnits, updateUnits } from "./service.js";

export const unitRoute = new Hono<{ Variables: AuthVariables }>()
	.use("*", authMiddleware)
	.post("/", zValidator("json", createUnitSchema), async (c) => {
		const user = c.get("user");
		const data = { ...c.req.valid("json"), userId: user.id };
		try {
			const unit = await createunit(data);
			return c.json({ success: true, data: unit }, 201);
		} catch (error) {
			console.error(error);
			throw new HTTPException(400, { message: "Failed to create unit" });
		}
	})
	.get("/", async (c) => {
		const user = c.get("user");
		try {
			const units = await getUnits(user.id);
			return c.json({ success: true, data: units });
		} catch (error) {
			console.error(error);
			throw new HTTPException(400, { message: "Failed to fetch units" });
		}
	})
	.put("/:id", zValidator("json", updateUnitSchema), async (c) => {
		const id = c.req.param("id");
		const data = c.req.valid("json");
		try {
			const unit = await updateUnits(id, data);
			return c.json({ success: true, data: unit });
		} catch (error) {
			console.error(error);
			throw new HTTPException(400, { message: "Failed to update unit" });
		}
	})
	.delete("/:id", async (c) => {
		const id = c.req.param("id");
		try {
			const result = await deleteUnits(id);
			return c.json({ success: true, data: result });
		} catch (error) {
			console.error(error);
			throw new HTTPException(400, { message: "Failed to delete unit" });
		}
	});

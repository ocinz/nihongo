import { zValidator } from "@hono/zod-validator";
import { cardSchema, paramSchema } from "@nihongo/schema";
import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import type { HonoContext } from "../../types.js";
import { prisma } from "../../utils/prisma.js";

export const cardRoute = new Hono<HonoContext>()
	.post("/", zValidator("json", cardSchema), async (c) => {
		const request = c.req.valid("json");
		try {
			const card = await prisma.card.create({
				data: request,
			});
			return c.json({ card });
		} catch (error) {
			console.error(error);
			throw new HTTPException(400, { message: "Failed to create card" });
		}
	})
	.get("/", async (c) => {
		try {
			const cards = await prisma.card.findMany();

			return c.json({ data: cards });
		} catch (error) {
			console.error(error);
			throw new HTTPException(400, { message: "Failed to fetch cards" });
		}
	})
	.get("/:id", zValidator("param", paramSchema), async (c) => {
		const { id } = c.req.valid("param");
		try {
			const card = await prisma.card.findUnique({
				where: {
					id,
				},
			});

			return c.json({ data: card });
		} catch (error) {
			console.error(error);
			throw new HTTPException(400, { message: "Failed to fetch card" });
		}
	});

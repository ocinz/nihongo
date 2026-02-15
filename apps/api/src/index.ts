import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { authRoute } from "./modules/auth/route.js";

const app = new Hono()
	.use(logger())
	.use(
		cors({
			origin: "http://localhost:3000",
			credentials: true,
		}),
	)
	.get("/", (c) => {
		return c.json({ message: "Devora - Nutrilog MBG" });
	})
	.route("/auth", authRoute);

export type BackendType = typeof app;

serve(
	{
		fetch: app.fetch,
		port: 8000,
	},
	(info) => {
		console.log(`Server is running on http://localhost:${info.port}`);
	},
);

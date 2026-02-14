import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { unitRoute } from "./modules/unit/route.js";
const app = new Hono().get("/", (c) => {
	return c.text("Hello Hono!");
})
.route("/units", unitRoute)


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

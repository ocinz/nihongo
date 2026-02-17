import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/grammar/")({
	component: RouteComponent,
	staticData: {
		crumb: {
			module: "Grammar",
		},
	},
});

function RouteComponent() {
	return <div>Hello "/_authed/grammar/"!</div>;
}

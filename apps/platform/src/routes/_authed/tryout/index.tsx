import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/tryout/")({
	component: RouteComponent,
	staticData: {
		crumb: {
			module: "Exam",
		},
	},
});

function RouteComponent() {
	return <div>Hello "/_authed/tryout/"!</div>;
}

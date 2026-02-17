import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/learning-path/")({
	component: RouteComponent,
	staticData: {
		crumb: {
			module: "Learning Path",
		},
	},
});

function RouteComponent() {
	return <div>Hello "/_authed/learning-path/"!</div>;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authed/flashcard/")({
	component: RouteComponent,
	staticData: {
		crumb: {
			module: "Flashcard",
			module_path: "/lashcard",
		},
	},
});

function RouteComponent() {
	return <div>Hello "/_authed/flashcard/"!</div>;
}

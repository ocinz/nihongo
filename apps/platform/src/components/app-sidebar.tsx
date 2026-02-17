"use client";

import { useAtomValue } from "jotai";
import {
	BookOpen,
	Bot,
	GalleryVerticalEnd,
	Settings2,
	SquareTerminal,
} from "lucide-react";
import type * as React from "react";
import { userAtom } from "@/atoms/user.atom";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
	teams: [
		{
			name: "Nihongo",
			logo: GalleryVerticalEnd,
			plan: "Nihongo by Kokage",
		},
	],
	navMain: [
		{
			title: "Flashcard",
			url: "/flashcard",
			icon: SquareTerminal,
		},
		{
			title: "Bunpou",
			url: "/grammar",
			icon: Bot,
		},
		{
			title: "Exam",
			url: "/tryout",
			icon: BookOpen,
		},
		{
			title: "Learning Path",
			url: "/learning-path",
			icon: Settings2,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const user = useAtomValue(userAtom);
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<TeamSwitcher teams={data.teams} />
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}

"use client";

import { AboutMe } from "@/app/home/aboutMe/Page";
import { Navbar } from "@/app/home/navBar/page";
import { PageContent } from "@/app/home/pageContent/Page";
import { Projects } from "@/app/home/Projects/page";
import { TalkToMe } from "./home/talkToMe/page";
import { Works } from "@/app/home/works/pages";
import { Services } from "./home/services/page";
import { Footer } from "./home/footer/page";
import { AppContexts } from "./home/navBar/components/contexts";

export default function Home() {

	return (
		<div className="md:w-full xs:max-w-screen h-screen">
			<AppContexts>
				<Navbar />
				<PageContent />
				<AboutMe />
				<Works />
				<Services />
				<Projects />
				<TalkToMe />
				<Footer />
			</AppContexts>
		</div>
	)
}

"use client";

import { AboutMe } from "./home/aboutMe/aboutMe";
import { Navbar } from "../app/home/navbar/navbar";
import { PageContent } from "./home/pageContent/pageContent";
import { Projects } from "../app/home/Projects/projects";
import { TalkToMe } from "./home/talkToMe/talkToMe";
import { Works } from "../app/home/works/works";
import { Services } from "./home/services/services";
import { Footer } from "./home/footer/footer";
import { AppContexts } from "./home/navbar/components/contexts";
import 'dotenv/config'

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

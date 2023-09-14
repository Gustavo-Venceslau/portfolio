import { AboutMe } from "@/app/aboutMe/Page";
import { Navbar } from "@/app/navBar/Navbar";
import { PageContent } from "@/app/pageContent/Page";
import { Projects } from "@/app/Projects/page";
import { TalkToMe } from "./talkToMe/page";

export default function Home() {
  return (
    <div className="bg-[#1f1f20] w-full h-screen">
      <Navbar />
      <PageContent />
      <AboutMe />
      <Projects />
	  <TalkToMe />
    </div>
  )
}

import { AboutMe } from "@/components/AboutMe";
import { Navbar } from "@/components/Navbar";
import { PageContent } from "@/components/PageContent";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="bg-[#1f1f20] w-full h-screen">
      <Navbar />
      <PageContent />
      <AboutMe />
      <Projects />
    </div>
  )
}

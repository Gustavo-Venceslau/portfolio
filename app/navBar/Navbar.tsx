import { Logo } from "../utils/logo";
import { SectionLinks } from "../utils/sectionLinks";

export function Navbar(){

    return(
        <nav className="w-full h-20 flex justify-between items-center px-20" id="Home">
            <Logo />
            <SectionLinks />
            <a 
				className="bg-[#2b4c7e] hover:bg-[#2b4c7e]/75 shadow-xl w-36 h-10 rounded-full text-white font-semibold flex items-center justify-center cursor-pointer"
				href="#TalkToMe"
			>
				Talk to me
			</a>
        </nav>
    )
}
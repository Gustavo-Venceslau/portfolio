"use client";

import { Logo } from "../utils/logo";
import { SectionLinks } from "../utils/sectionLinks";
import { useNavMobileContext } from "./components/contexts/navbarMobileContext";
import { Hamburger } from "./components/menu/hamburger";
import { HamburgerMenu } from "./components/menu/hamburgerMenu";

export function Navbar(){
	const { isVisible, setIsVisible } = useNavMobileContext();

	const handleHamburgerMenu = () => {
		setIsVisible(!isVisible);
	}

    return(
		<nav className="bg-[#1f1f20] w-full h-20 flex flex-col justify-between items-center" id="Home">
			<div className="flex flex-row justify-between items-center w-full py-5 px-7 lg:px-20 fixed lg:relative bg-[#1f1f20] z-50">
				<Logo />
				<div className="hidden lg:flex">
					<SectionLinks />
				</div>
				<a 
						className="bg-[#2b4c7e] hover:bg-[#2b4c7e]/75 shadow-xl w-36 h-10 rounded-full text-white font-semibold hidden lg:flex items-center justify-center cursor-pointer"
						href="#TalkToMe"
					>
						Talk to me
				</a>
				<Hamburger 
					onClick={handleHamburgerMenu}
				/>
			</div>
			{isVisible && <HamburgerMenu />}
		</nav>
    )
}    
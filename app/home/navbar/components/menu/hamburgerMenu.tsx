"use client";

import { useNavMobileContext } from "../contexts";
import { Button } from "./button";

export function HamburgerMenu(){
	const { isVisible, setIsVisible } = useNavMobileContext(); 

	const menuTranslation = isVisible ? "translate-x-[0%]" : "translate-x-[100%]";

	return(
		<div 
			className={`w-full h-screen bg-[#1F1F20] flex flex-col lg:hidden fixed mt-[76px] z-50 ${menuTranslation} transition-transform ease-out duration-300`}
		>
			<Button 
				text="Home"
				id="Home"
			></Button>
			<Button 
				text="About Me"
				id="AboutMe"
			></Button>
			<Button 
				text="Works"
				id="Works"
			></Button>
			<Button 
				text="Services"
				id="Services"
			></Button>
			<Button 
				text="Talk To Me"
				id="TalkToMe"
			></Button>

	  	</div>
	)
}
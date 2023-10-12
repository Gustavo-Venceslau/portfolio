import { SectionLinks } from "@/app/home/utils/sectionLinks";

export function HamburgerMenu(){
	return(
		<div 
			className="w-full h-screen bg-[#1F1F20] flex flex-col lg:hidden fixed mt-[76px] z-50"
		>
			<SectionLinks />
	  	</div>
	)
}
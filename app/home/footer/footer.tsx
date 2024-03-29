import { Logo } from "../utils/logo";
import { SectionLinks } from "../utils/sectionLinks";

export function Footer(){
	return(
		<div className="w-full h-28 bg-[#1E1E1E] flex justify-between items-center px-7 lg:px-16">
			<Logo />
			<SectionLinks />
		</div>
	)
}
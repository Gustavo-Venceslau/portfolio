export function SectionLinks(){
	return(
		<ul className="flex flex-row list-none text-white text-lg gap-10">
			<li className="border-transparent border-b-2 hover:border-b-2 hover:border-[#2b4c7e]"><a href='#Home'>Home</a></li>
			<li className="hover:border-b-2 hover:border-[#2b4c7e]"><a href='#AboutMe'>About Me</a></li>
			<li className="hover:border-b-2 hover:border-[#2b4c7e]"><a href="#Works">Works</a></li>
			<li className="hover:border-b-2 hover:border-[#2b4c7e]"><a href="#Services">Services</a></li>
			<li className="hover:border-b-2 hover:border-[#2b4c7e]"><a href='#Projects'>Projects</a></li>
		</ul>
	)
}
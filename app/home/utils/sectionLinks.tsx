export function SectionLinks(){
	return(
		<ul className="hidden lg:flex flex-col lg:flex-row list-none text-white text-lg gap-10">
			<a href='#Home'>
				<li>Home</li>
			</a>
			<a href='#AboutMe'>
				<li>About Me</li>
			</a>
			<a href="#Works">
				<li>Works</li>
			</a>
			<a href="#Services">
				<li>Services</li>
			</a>
			<a href='#Projects'>
				<li>Projects</li>
			</a>
		</ul>
	)
}
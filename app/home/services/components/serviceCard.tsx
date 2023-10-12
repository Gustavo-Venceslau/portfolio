interface ServiceCardProps {
	icon: JSX.Element,
	title: string,
	text: string
}

export function ServiceCard({icon, title, text}: ServiceCardProps){
	return(
		<div 
			className="w-[440px] h-[320px] rounded-lg bg-[#1F1F20] relative -top-1/2 p-6 shadow-[0_2px_4px_2px_rgba(0,0,0,0.25)] hover:bg-[#567EBB] group transition-all delay-75"
		>
			{icon}
			<h1 
				className="text-3xl font-semibold mt-7 text-[#567EBB] group-hover:text-white"
			>
				{title}
			</h1>
			<p 
				className="text-base mt-5 text-white"
			>{text}</p>
		</div>
	);
}
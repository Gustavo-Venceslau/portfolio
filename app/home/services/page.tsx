import { ServiceCard } from "./components/serviceCard";
import { FaServer } from "react-icons/fa";
import { BsServer } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";

export function Services(){
	const iconSize = 70;

	return(
		<div className="w-full h-[560px]" id="Services">
			<div className="w-full h-[300px] text-center">
				<h2 className="text-[#2B4C7E] font-bold text-4xl">Services</h2>
				<h4 className="text-[#606D80B2]/70 text-2xl">Find the service you need for your business!</h4>
			</div>
			<div className="w-full h-[260px] bg-[#2B4C7E] lg:flex hidden lg:flex-row justify-center gap-10">
				<ServiceCard 
					icon={<CgBrowser size={iconSize} color="white" />}
					title="Front-end"
					text="Front-end development using the most popular tools like ReactJS, NextJS, Tailwindcss, HTML, and CSS."
				/>
				<ServiceCard 
					icon={<FaServer size={iconSize} color="white" />} 
					title="Back-end" 
					text="Back-end development using Java, Spring Framework, NodeJS, and among others."
				/>
				<ServiceCard 
					icon={<BsServer size={iconSize} color="white" />}
					title="Database"
					text="Database administration and development of database solutions for any business."
				/>
			</div>
		</div>
	);
}
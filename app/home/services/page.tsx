import { ServiceCard } from "./components/serviceCard";
import { FaServer } from "react-icons/fa";
import { BsServer } from "react-icons/bs";
import { CgBrowser } from "react-icons/cg";

export function Services(){
	const iconSize = 70;

	return(
		<div className="w-full pt-10" id="Services">
			<div className="w-full lg:h-[300px] text-center">
				<h2 className="text-[#2B4C7E] font-bold text-3xl lg:text-4xl">Services</h2>
				<h4 className="text-[#606D80B2]/70 text-xl">Find the service you need for your business!</h4>
			</div>
			<div className="w-full lg:h-[260px] lg:bg-[#2B4C7E] flex flex-col lg:flex-row items-center justify-center gap-10 px-7 lg:px-20 mt-10 lg:mt-0 mb-10 lg:mb-0">
				<ServiceCard 
					icon={<CgBrowser size={iconSize} color="white" />}
					title="Front-end"
					text="Front-end development using the most popular tools such as ReactJS, NextJS, Tailwindcss, HTML, and CSS. Creating beautiful, responsive websites that are faithful to the design."
				/>
				<ServiceCard 
					icon={<FaServer size={iconSize} color="white" />} 
					title="Back-end" 
					text="Back-end development using powerful tools such as Java, Spring Framework, and NodeJS. Always developing scalable, reliable, and easy-to-maintain solutions."
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
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { CardSlider } from "./components/CardSlider";

export function Works(){

	return(
		<div className="w-full lg:px-20 px-7 md:py-10 flex md:flex-row flex-col justify-between gap-16" id="Works">
			<section className="flex flex-col md:justify-between md:w-1/2 w-full md:h-[480px]">
				<div>
					<h1 className="md:text-4xl text-2xl font-bold">
						Working with  
						<span className="text-[#567EBB]"> big </span> 
						tech companies 🚀
					</h1>
					<h3 
						className="text-base text-[#606D80B2]/70 mt-6"
					>
						During my time at these large companies, I worked with different teams, always in contact with different technologies to learn more and improve my knowledge to be a better professional who can work with different solutions.
					</h3>
				</div>
				<Link
					className="flex flex-row items-center text-xl mt-10"
					href="https://www.linkedin.com/in/gustavo-de-almeida-725549155/"
				>
					See all my previous jobs <IoIosArrowForward />
				</Link>
			</section>
			<CardSlider />
		</div>
	);
}
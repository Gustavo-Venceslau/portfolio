import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { CardSlider } from "./components/CardSlider";

export function Works(){

	return(
		<div className="w-full md:px-20 xs:px-7 md:py-10 flex md:flex-row xs:flex-col justify-between" id="Works">
			<section className="flex flex-col md:justify-between md:w-1/2 xs:w-full h-[480px]">
				<div>
					<h1 className="md:text-4xl xs:text-2xl font-bold">
						Working with  
						<span className="text-[#567EBB]"> big </span> 
						tech companies 🚀
					</h1>
					<h3 
						className="md:text-xl xs:text-base text-[#606D80B2]/70 mt-6">
						In my time in these big companies, I have worked with different teams to learn more and improve my knowledge to be a better professional for the market.
					</h3>
				</div>
				<Link
					className="flex flex-row items-center text-xl xs:mt-10"
					href="https://www.linkedin.com/in/gustavo-de-almeida-725549155/"
				>
					See all my previous jobs <IoIosArrowForward />
				</Link>
			</section>
			<CardSlider />
		</div>
	);
}
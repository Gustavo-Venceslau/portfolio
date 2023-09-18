import Link from "next/link";
import { WorkCard } from "./components/WorkCard";
import { IoIosArrowForward } from "react-icons/io";

export function Works(){
	return(
		<div className="w-full h-[640px] px-20 flex flex-row justify-between">
			<section className="flex flex-col justify-between w-1/2 h-[480px]">
				<div>
					<h1 className="text-4xl font-bold">
						Working with  
						<span className="text-[#567EBB]"> big </span> 
						tech companies 🚀
					</h1>
					<h3 
						className="text-xl text-[#606D80B2]/70 mt-6">
						In my time in these big companies, I have worked with different teams to learn more and improve my knowledge to be a better professional for the market.
					</h3>
				</div>
				<Link
					className="flex flex-row items-center text-xl"
					href="https://www.linkedin.com/in/gustavo-de-almeida-725549155/"
				>
					See all my previous jobs <IoIosArrowForward />
				</Link>
			</section>
			<section>
				<WorkCard />
			</section>
		</div>
	);
}
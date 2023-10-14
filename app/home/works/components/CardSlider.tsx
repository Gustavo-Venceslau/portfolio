"use client";

import { useEffect, useState } from "react";
import { responsibilitiesKyndryl, responsibilitiesIBM } from "../util/responsabilities";
import { WorkCard } from "./WorkCard";

export function CardSlider(){
	const cards = [
		<WorkCard
			key={0}
			imageURL="/Kyndryl_logo.svg.png"
			imageSize={200}
			jobTitle="Intern"
			responsibilities={responsibilitiesKyndryl}
		/>,
		<WorkCard
			key={1}
			imageURL="/IBM_logo.svg.png"
			imageSize={200}
			jobTitle="Intern"
			responsibilities={responsibilitiesIBM}
		/>
	]

	const [currentIndex, setCurrentIndex] = useState(0);

	const next = () => {
		setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
	}

	useEffect(() => {
		const slideInterval = setInterval(next, 4000);
		return () => clearInterval(slideInterval); 
	})

	return(
		<section className="md:w-1/2 w-full overflow-hidden relative">
			<div 
				className="flex flex-row transition-transform ease-out duration-700"
				style={{ transform: `translateX(-${currentIndex * 100}%)`}}
			>
				{cards}
			</div>
			<div className="h-4 flex items-center justify-center gap-2 mt-4">
				{cards.map((_, index) => {
					return (
						<div 
							key={index}
							className={`transition-all w-3 h-3 bg-[#567EBB] rounded-full cursor-pointer
								${currentIndex === index ? "p-2" : "bg-opacity-50"}
							`}
							onClick={() => setCurrentIndex(index)}
						>

						</div>
					)
				})}
			</div>
		</section>
	)
}
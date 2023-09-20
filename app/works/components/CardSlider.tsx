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
		<section className="w-1/2 overflow-hidden relative">
			<div 
				className="flex flex-row transition-transform ease-out duration-700"
				style={{ transform: `translateX(-${currentIndex * 100}%)`}}
			>
				{cards}
			</div>
			<div className="flex justify-center mt-4">
				{cards.map((card, index) => 
					<input 
						key={index}
						type="radio"
						name="radio-btn" 
						id="first-radio"
						className="first:mr-2"
						onClick={() => setCurrentIndex(index)}
					/>
				)}
			</div>
		</section>
	)
}
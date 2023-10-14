"use client"

import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { cards } from "../util/projectCards";
import Link from "next/link";

export function CardSlider(){

	const SLIDE_NUMBER = 348;

	const [currentPosition, setCurrentPosition] = useState(0);

	const goToPrevious = () => {
		const isTheFirst = currentPosition === 0;
		const newPosition = isTheFirst ? cards.length * SLIDE_NUMBER : currentPosition - SLIDE_NUMBER;
		setCurrentPosition(newPosition);
	};

	const goToNext = () => {
		const isTheLast = currentPosition === (cards.length - 1)  * SLIDE_NUMBER;
		const newPosition = isTheLast ? 0 : currentPosition + SLIDE_NUMBER;
		setCurrentPosition(newPosition);
	};

	useEffect(() => {
		const slideInterval = setInterval(goToNext, 3000);
		return () => clearInterval(slideInterval);
	});

	return(
		<div className="flex flex-col items-center">
			<div className="flex justify-center items-center">
				<IoIosArrowBack
					size={75} 
					onClick={goToPrevious}
					color="#1f1f20"
					className="cursor-pointer"
				/>
				<div 
					className="w-[19%] lg:w-[1040px] h-[480px] flex items-center overflow-hidden"
				>	
					<div
						className="flex flex-row transition-transform ease-out duration-700"
						style={{ transform: `translateX(-${currentPosition}px)`}}
					>
						{cards}
					</div>
				</div>
				<IoIosArrowForward 
					size={75} 
					onClick={goToNext}
					color="#1f1f20"
					className="cursor-pointer"
				/>
			</div>
			<div className="h-4 flex items-center justify-center gap-2">
				{cards.map((_, index) => {
					return(
						<div
							key={index}
							className={`transition-all w-3 h-3 bg-[#1F1F20] rounded-full cursor-pointer
								${currentPosition / SLIDE_NUMBER === index ? "p-2" : "bg-opacity-50"}
							`}
							onClick={() => setCurrentPosition(SLIDE_NUMBER * index)}
						>	
						</div>
					)
				})}
			</div>
			<Link 
				href="https://github.com/Gustavo-Venceslau?tab=repositories"
				className="text-white font-semibold text-base mt-9 hover:underline"
			>
				See all my projects
			</Link>
		</div>
	)
}
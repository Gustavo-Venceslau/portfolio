"use client"

import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

interface CardSliderProps{
	cards: JSX.Element[]
}

export function CardSlider({cards}: CardSliderProps){
	const [currentIndex, setCurrentIndex] = useState(0);

	const goToPrevious = () => {
		const isTheFirst = currentIndex === 0;
		const newIndex = isTheFirst ? cards.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	}

	const goToNext = () => {
		const isTheLast = currentIndex === cards.length - 1;
		const newIndex = isTheLast ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	}

	return(
		<div className="flex flex-col items-center">
			<div className="flex items-center">
				<IoIosArrowBack
					size={75} 
					onClick={goToPrevious}
					color="#1f1f20"
					className="cursor-pointer"
				/>
				{cards[currentIndex]}
				<IoIosArrowForward 
					size={75} 
					onClick={goToNext}
					color="#1f1f20"
					className="cursor-pointer"
				/>
			</div>
			<div className="mt-2">
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
		</div>
	)
}
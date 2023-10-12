"use client"

import { useNavMobileContext } from "../contexts";

interface ButtonProps {
	text: string,
	id: string,
}

export function Button({text, id}: ButtonProps){
	const { isVisible, setIsVisible } = useNavMobileContext(); 

	return(
		<a 
			href={`#${id}`}
			className="px-7 py-4 hover:bg-slate-600 active:bg-slate-600 transition-all"
		>
			<button
				className="text-white font-bold text-lg w-full h-full text-left"
				onClick={() => setIsVisible(!isVisible)}
			>
				{text}
			</button>
		</a>
	)
}
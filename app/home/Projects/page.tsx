import { CardSlider } from "./components/CardSlider";

export function Projects(){
    return(
        <div className="w-full h-[680px] bg-[#2b4c7e] p-4 overflow-hidden text-center" id="Projects">
            <div className="w-full">
				<h2 className="text-2xl lg:text-4xl font-bold text-white">Projects</h2>
				<h4 className="text-white/70 text-xl lg:text-2xl">Let’s see my principal projects!</h4>
			</div>
            <div 
                className="w-full flex flex-col items-center" 
                id="Projects"
            >
				<div className="flex flex-row justify-center">
					<CardSlider />
				</div>
        	</div>
        </div>
    )
}

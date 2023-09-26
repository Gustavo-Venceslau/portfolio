import { CardSlider } from "./components/CardSlider";

export function Projects(){
    return(
        <div className="w-full h-[600px] bg-[#2b4c7e] p-4 overflow-hidden text-center">
            <div className="w-full mb-10">
				<h1 className="text-4xl font-bold text-white">Projects</h1>
				<h3 className="text-white/70">Let’s see my principal projects!</h3>
			</div>
            <div 
                className="w-full flex flex-col items-center" 
                id="Projects"
            >
				<div className="w-[200%] flex flex-row justify-center">
					<CardSlider />
				</div>
        	</div>
        </div>
    )
}

import { CardSlider } from "./components/CardSlider";
import { ProjectCard } from "./components/ProjectCard";

export function Projects(){
	const cards: JSX.Element[] = [
		<ProjectCard 
			key={0}
			name="CHESS-SYSTEM"
			imageURL="/chess-system.jpeg"
			imageSize={300}
			projectStack={["JAVA"]}
			githubURL="https://github.com/Gustavo-Venceslau/chess-system-java"
		/>
		,
		<ProjectCard 
			key={1}
			name="ROCKET COFFEE"
			imageURL="/rocketCoffee.jpeg"
			imageSize={300}
			projectStack={["HTML", "CSS"]}
			githubURL="https://github.com/Gustavo-Venceslau/chess-system-java"
		/>
	]

    return(
        <div className="w-full h-[560px] bg-[#2b4c7e] p-4 overflow-hidden">
            <h1 className="text-2xl text-white text-center mb-6">PROJECTS</h1>
            <div 
                className="w-full flex flex-col items-center" 
                id="Projects"
            >
				<div className="w-[200%] flex flex-row justify-center">
					<CardSlider cards={cards}/>
				</div>
        	</div>
        </div>
    )
}

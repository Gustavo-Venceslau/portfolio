import { ProjectCard } from "./components/ProjectCard";

export function Projects(){
    return(
        <div className="w-full h-[600px] bg-[#2b4c7e] p-4">
            <h1 className="text-2xl text-white text-center mb-6">PROJECTS</h1>
            <div 
                className="w-full flex flex-col items-center" 
                id="Projects"
            >
				<div className="w-full flex flex-row justify-center">
					<ProjectCard 
						name="CHESS-SYSTEM"
						imageURL="/chess-system.jpeg"
						imageSize={325}
						projectStack={["JAVA"]}
						githubURL="https://github.com/Gustavo-Venceslau/chess-system-java"
					/>
					<ProjectCard 
						name="ROCKET COFFEE"
						imageURL="/rocketcoffee.jpg"
						imageSize={300}
						projectStack={["HTML", "CSS"]}
						githubURL="https://github.com/Gustavo-Venceslau/chess-system-java"
					/>
				</div>
        	</div>
        </div>
    )
}
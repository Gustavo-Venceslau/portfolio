import { ProjectCard } from "../components/ProjectCard";

export const cards: JSX.Element[] = [
	<ProjectCard 
		key={0}
		name="CHESS-SYSTEM"
		imageURL="/chess-system.jpeg"
		imageSize={300}
		projectDescription="A chess-system builded in java without any framework, using OO only."
		githubURL="https://github.com/Gustavo-Venceslau/chess-system-java"
	/>,
	<ProjectCard 
		key={1}
		name="ROCKET COFFEE"
		imageURL="/rocketCoffee.jpeg"
		imageSize={300}
		projectDescription="Simple HTML and CSS that was make in the Rocketseat marathon."
		githubURL="https://github.com/Gustavo-Venceslau/RocketCoffee"
	/>,
	<ProjectCard 
		key={2}
		name="NICE-IA"
		imageURL="/nice-ia.jpg"
		imageSize={300}
		projectDescription="Spring application focus on create a platform to students can share knowledge."
		githubURL="https://github.com/Gustavo-Venceslau/nice-ia"
	/>
]
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps{
    name: string,
    imageURL: string,
	imageSize: number,
	projectDescription: string,
    githubURL: string,
}

export function ProjectCard({name, imageURL, imageSize, projectDescription,githubURL}:ProjectCardProps){

    return(
        <div className={"min-w-[300px] h-[400px] bg-white p-2 rounded-xl shadow-lg mx-6 relative transform hover:scale-105 transition-all my-auto"}>
            <section className="w-full flex flex-col relative">
                <Link 
					href={githubURL}
					className="rounded-md w-full select-none"
				>
                    <div 
						className="w-full h-48"
					>
						<Image 
							src={imageURL}
							alt="chess-system" 
							height={imageSize} 
							width={imageSize} 
							className='rounded-md w-full h-full'
                    	/>
					</div>
                </Link>
                <div className="mt-4 h-44 flex flex-col justify-between select-none">
                    <div>
                        <h3 className="text-md text-[#2b4c7e] font-semibold">{name}</h3>
                        <p className="">{projectDescription}</p>
                    </div>
                    <div className="w-full flex flex-row justify-center gap-4">
						<Link 
							href={githubURL}
							className="px-4 py-[12px] rounded-lg bg-[#2b4c7e]/95 text-white hover:bg-[#2b4c7e] flex items-center"
						>
							View More
						</Link>
					</div>
                </div>
            </section>
        </div>
    )
}
import Link from "next/link";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";

interface ProjectCardProps{
    name: string,
    imageURL: string,
	imageSize: number,
	projectStack: Array<string>
    githubURL: string
}

export function ProjectCard({name, imageURL, imageSize, projectStack, githubURL}:ProjectCardProps){

    return(
        <div className={`w-[300px] bg-white p-2 rounded-xl shadow-lg mx-6`}>
            <section className="w-full flex flex-col relative">
                <Link 
					href={githubURL}
					className="rounded-md w-full h-22 select-none"
				>
                    <div 
						className="w-full h-48"
					>
						<Image 
							src={imageURL}
							alt="chess-system" 
							height={imageSize} 
							width={imageSize} 
							className='rounded-md'
                    	/>
					</div>
                </Link>
                <div className="mt-4 h-full flex flex-col">
                    <div>
                        <h3 className="text-md text-[#2b4c7e] font-semibold">{name}</h3>
                        <p className="">A chess-system builded in java without any framework, using OO only.</p>
						<div className="flex flex-row">
							{
								projectStack.map((tech, index) => 
									<h2 
										key={index}
										className="bg-[#2b4c7e] text-white w-16 h-6 flex justify-center items-center rounded-full mt-3 mr-2 text-sm select-none"
									>
										{tech}
									</h2>)
							}
						</div>
                    </div>
                    <Link
                        href={githubURL}
						className="w-full flex justify-end"
					>
                        <FaGithub 
							size={25}
							className="mr-2"
							color="#2b4c7e"
						/>   
                    </Link>
                </div>
            </section>
        </div>
    )
}
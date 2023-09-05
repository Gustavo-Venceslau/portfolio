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
	let projectStackKey = 0;

    return(
        <div className="w-3/6 bg-white p-2 rounded-xl shadow-lg">
            <section className="w-full h-52 flex flex-row">
                <Link 
					href={githubURL}
					className="overflow-hidden rounded-md"
				>
                    <Image 
                        src={imageURL}
                        alt="chess-system" 
                        height={imageSize} 
                        width={imageSize} 
                        className='rounded-md'
                    />
                </Link>
                <div className="ml-4 h-full flex flex-col justify-between">
                    <div>
                        <h3 className="text-md text-[#2b4c7e] font-semibold">{name}</h3>
                        <p className="">A chess-system builded in java without any framework, using OO only.</p>
						<div className="flex flex-row">
							{
								projectStack.map(tech => 
									<h2 
										key={projectStackKey++}
										className="bg-[#2b4c7e] text-white w-20 h-8 flex justify-center items-center rounded-full mt-5 mr-2"
									>
										{tech}
									</h2>)
							}
						</div>
                    </div>
                    
                    <Link
                        href={githubURL}
                        className="bg-[#1f1f20] text-white rounded-full h-12 w-12 flex justify-center items-center relative">
                        <FaGithub size={24} className="mx-auto my-auto"/>   
                    </Link>
                </div>
            </section>
        </div>
    )
}
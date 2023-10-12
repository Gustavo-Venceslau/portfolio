import { InfoLabel } from "./util/InfoLabel"

export function TextContent(){
	return (
		<div className="md:w-1/2 xs:w-full p-2 flex flex-col">
                <div className="md:w-4/5 xs:w-full">
                    <h1 
						className="text-[#1F1F20] md:text-4xl xs:text-2xl font-bold mb-6"
					>
						About <span className="text-[#567ebb]">Me</span> 🧑🏻‍💻
					</h1>
                    <p className="text-[#606d80]/70 font-semibold mb-5">
                        I am a Developer that love build different projects with diffent technologs. I love computer and how its works and what i can do with then and for this reason a I am doing computer science.
                    </p>
                    <p className="text-[#606d80]/70 font-semibold mb-10">
                        I love work with development and i hope that in the future i can work like Software Engineer in a good company!
                    </p>
                    <div className="w-full flex md:flex-row xs:flex-col">
                        <section className="flex flex-col md:w-1/2 xs:w-full">
                            <InfoLabel title="NAME" info="Gustavo de Almeida"/>
							<InfoLabel title="EMAIL" info="gustavodealmeida01@gmail.com"/>
                        </section>
                        <section className="flex flex-col md:w-1/2 xs:w-full">
							<InfoLabel title="EDUCATION" info="Computer Science | UNIP - Swift"/>
							<InfoLabel title="EMPLOYMENT" info="Open"/>
                        </section>
                    </div>
                </div>
            </div>
	)
}
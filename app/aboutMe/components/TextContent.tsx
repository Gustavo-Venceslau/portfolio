import { InfoLabel } from "./util/InfoLabel"

export function TextContent(){
	return (
		<div className="w-1/2 p-2 flex flex-col">
                <div className="w-4/5">
                    <h1 
						className="text-[#1F1F20] text-4xl font-bold mb-6"
					>
						About <span className="text-[#567ebb]">Me</span> 🧑🏻‍💻
					</h1>
                    <p className="text-[#606d80]/70 font-semibold mb-5">
                        I am a Developer that love build different projects with diffent technologs. I love computer and how its works and what i can do with then and for this reason a I am doing computer science.
                    </p>
                    <p className="text-[#606d80]/70 font-semibold mb-10">
                        I love work with development and i hope that in the future i can work like Software Engineer in a good company!
                    </p>
                    <div className="w-full flex flex-row">
                        <section className="flex flex-col w-1/2">
                            <InfoLabel title="NAME" info="Gustavo de Almeida"/>
							<InfoLabel title="EMAIL" info="gustavodealmeida01@gmail.com"/>
                        </section>
                        <section className="flex flex-col w-1/2">
							<InfoLabel title="EDUCATION" info="Computer Science | UNIP - Swift"/>
							<InfoLabel title="EMPLOYMENT" info="Open"/>
                        </section>
                    </div>
                </div>
            </div>
	)
}
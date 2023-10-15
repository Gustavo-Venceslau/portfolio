import { InfoLabel } from "./util/InfoLabel"

export function TextContent(){
	return (
		<div className="lg:w-1/2 w-full p-2 flex flex-col">
                <div className="md:w-4/5 xs:w-full">
                    <h1 
						className="text-[#1F1F20] md:text-4xl xs:text-2xl font-bold mb-6"
					>
						About <span className="text-[#567ebb]">Me</span> 🧑🏻‍💻
					</h1>
                    <p className="text-[#606d80]/70 mb-5">
						I am a developer motivated to build things that solve problems and make a relevant impact. For that reason, I love computers how they work, and what I can do with them.
                    </p>
                    <p className="text-[#606d80]/70 mb-10">
						I have worked for years in software development and database administration. Developing software solutions with scalability, reliability, and easy maintenance.
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
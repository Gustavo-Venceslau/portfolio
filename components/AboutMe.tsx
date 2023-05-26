import Image from "next/image"

export function AboutMe(){
    return(
        <div className="w-full h-[600px] flex flex-row p-4 items-center" id="AboutMe">
            <div className="w-1/2 flex justify-center items-center">
                <Image src='/photo.png' alt='profile photo' height={100} width={300} 
                        className='rounded-full z-50'
                />
                <div className="bg-[#567ebb] rounded-full w-[300px] h-[300px] absolute translate-y-[68px]"></div>
                <div className="border-2 border-[#567ebb] rounded-full w-[400px] h-[400px] absolute translate-y-[68px]"></div>
            </div>
            <div className="w-1/2 p-2 flex flex-col">
                <div className="w-4/5">
                    <h1 className="text-[#567ebb] text-lg font-bold mb-6">About Me</h1>
                    <p className="text-[#606d80]/70 font-semibold mb-5">
                        i'm a Developer that love build different projects with diffent technologs. I love computer and how it's works and what i can do with then and for this reason a i'm doing computer science.
                    </p>
                    <p className="text-[#606d80]/70 font-semibold mb-10">
                        I love work with development and i hope that in the future i can work like Software Engineer in a good company!
                    </p>
                    <div className="w-full flex flex-row">
                        <section className="flex flex-col w-1/2">
                            <div className="mb-8">
                                <h1 className="text-[#1f1f20] font-bold">NAME</h1>
                                <h3 className="text-[#606d80]/70">Gustavo de Almeida</h3>
                            </div>
                            <div>
                                <h1 className="text-[#1f1f20] font-bold">EMAIL</h1>
                                <h3 className="text-[#606d80]/70">gustavodealmeida01@gmial.com</h3>
                            </div>
                        </section>
                        <section className="flex flex-col w-1/2">
                            <div className="mb-8">
                                <h1 className="text-[#1f1f20] font-bold">EDUCATION</h1>
                                <h3 className="text-[#606d80]/70">Computer Science | UNIP - Swift</h3>
                            </div> 
                            <div>
                                <h1 className="text-[#1f1f20] font-bold">EMPLOYMENT</h1>
                                <h3 className="text-[#606d80]/70">Open</h3>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export function RightSideContent(){
	return(
		<div className="w-1/2 pt-20">
			<h1 className="text-[#567ebb] text-8xl font-semibold mb-4">
				Gustavo 
				<br />
				de Almeida
			</h1>
			<h1 className="text-white text-5xl">
				Hi, I am Software Developer 👋🏻
			</h1>
			<p className="mt-4 text-[#606d80]">
				I am excited to introduce myself as a dedicated professional with a proven track record in software development and database administration. With a strong foundation in problem-solving and FullStack development, I am ready to make an immediate impact on your teams success.
			</p>
			<div className="flex flex-row mt-8 items-center">
				<a 
					className=" w-56 h-14 bg-[#2b4c7e] hover:bg-[#2b4c7e]/75 shadow-xl rounded-full text-white font-semibold text-xl flex justify-center items-center"
					href="#TalkToMe"
				>
					Hire me!
				</a>
				<Link href='https://www.linkedin.com/in/gustavo-de-almeida-725549155/' className="ml-6 p-4 rounded-full border-[#2b4c7e] border-2 text-[#2b4c7e] hover:text-white hover:bg-[#2b4c7e]">
					<AiFillLinkedin size={22}/>
				</Link>
				<Link href='https://github.com/Gustavo-Venceslau' className="ml-6 p-4 rounded-full border-[#2b4c7e] border-2 text-[#2b4c7e] hover:text-white hover:bg-[#2b4c7e]">
					<AiFillGithub size={22}/>
				</Link>
			</div>
		</div>
	)
}
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";

export function TextAndContacts(){
	return(
		<div
			className="w-3/4 flex items-start flex-col gap-7"
		>
				<h1 className="text-[#1F1F20] text-4xl font-bold">
					Talk To <span className="text-[#567EBB]">Me</span> and 
					lets <span className="text-[#567EBB]">work</span> together 💬
				</h1>
				<p className="text-[#606d80]/70 font-semibold">
					Lets connect to discuss how my skills can help you reach new heights. Please dont hesitate to contact me on my LinkedIn or via email. Please feel free to contact me by any means.
				</p>
				<div className="flex flex-col gap-5 text-xl text-[#606D80]">
					<h3 className="hover:text-[#1F1F20]">✉️ gustavodealmeida01@gmail.com</h3>
					<Link 
						href="https://www.linkedin.com/in/gustavo-de-almeida-725549155/" 
						className="flex flex-row items-center gap-1 hover:text-[#1F1F20]"	
					>
						<BsLinkedin /> Linkedin
					</Link>
				</div>
		</div>
	)
}
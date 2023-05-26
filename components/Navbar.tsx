import Link from "next/link";

export function Navbar(){
    return(
        <nav className="w-full h-20 flex justify-between items-center px-20">
            <h1 className=" text-3xl text-white font-bold">
                galmv<span className="text-[#2b4c7e]">_</span> 
            </h1>
            <ul className="flex flex-row list-none text-white text-lg">
                <li className=" border-transparent border-b-2 hover:border-b-2 hover:border-[#2b4c7e]"><Link href=''>Home</Link></li>
                <li className="ml-16 hover:border-b-2 hover:border-[#2b4c7e]"><a href='#AboutMe'>About me</a></li>
                <li className="ml-16 hover:border-b-2 hover:border-[#2b4c7e]"><Link href=''>Works</Link></li>
                <li className="ml-16 hover:border-b-2 hover:border-[#2b4c7e]"><Link href='https://github.com/Gustavo-Venceslau'>Projects</Link></li>
            </ul>
            <button className="bg-[#2b4c7e] hover:bg-[#2b4c7e]/75 shadow-xl w-36 h-10 rounded-full text-white font-semibold">Talk to me</button>
        </nav>
    )
}
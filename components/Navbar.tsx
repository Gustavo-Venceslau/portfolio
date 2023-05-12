import Link from "next/link";

export function Navbar(){
    return(
        <nav className="w-full h-20 flex justify-between items-center">
            <h1 className=" text-3xl text-white ml-4 font-bold">galmv_</h1>
            <ul className="flex flex-row list-none text-white text-lg">
                <li><Link href=''>About me</Link></li>
                <li className="ml-16"><Link href=''>Works</Link></li>
                <li className="ml-16"><Link href=''>Projects</Link></li>
            </ul>
            <button className="bg-[#2b4c7e] w-36 h-10 rounded-full mr-4 text-white">Talk to me</button>
        </nav>
    )
}
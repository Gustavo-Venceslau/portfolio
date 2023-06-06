import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { HiCode } from 'react-icons/hi';
import { SiIbm } from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { SiTypescript, SiReact, SiMicrosoftazure } from 'react-icons/si'

export function PageContent(){
    return(
        <div className="px-20 w-full h-[90vh]">
            <section className="w-full flex flex-row">
                <div className="w-1/2 pt-20">
                    <h1 className="text-[#567ebb] text-8xl font-semibold mb-4">
                        Gustavo 
                        <br />
                        de Almeida
                    </h1>
                    <h1 className="text-white text-5xl">
                        Hi, I'm Software Developer 👋🏻
                    </h1>
                    <p className="mt-4 text-[#606d80]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam blandit, justo vitae efficitur porttitor, orci libero rhoncus erat, at molestie tellus tellus venenatis lectus.
                    </p>
                    <div className="flex flex-row mt-8 items-center">
                        <button className=" w-56 h-14 bg-[#2b4c7e] hover:bg-[#2b4c7e]/75 shadow-xl rounded-full text-white font-semibold text-xl">
                            Hire me!
                        </button>
                        <Link href='https://www.linkedin.com/in/gustavo-de-almeida-725549155/' className="ml-6 p-4 rounded-full border-[#2b4c7e] border-2 text-[#2b4c7e] hover:text-white hover:bg-[#2b4c7e]">
                            <AiFillLinkedin size={22}/>
                        </Link>
                        <Link href='https://github.com/Gustavo-Venceslau' className="ml-6 p-4 rounded-full border-[#2b4c7e] border-2 text-[#2b4c7e] hover:text-white hover:bg-[#2b4c7e]">
                            <AiFillGithub size={22}/>
                        </Link>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end items-center md:max-2xl:pt-12">
                    <div className="w-[550px] h-[550px] rounded-full bg-[#2b4c7e] mt-8 md:max-2xl:mt-16 flex justify-center items-center shadow-xl flex-col">
                        <HiCode size={325} className='mb-4 text-[#1f1f20]'/>
                        <div className="flex flex-row text-white">
                            <FaJava  size={35}/>
                            <SiTypescript className="ml-6" size={35}/>
                            <SiReact  className="ml-6" size={35}/>
                            <FaAws  className="ml-6" size={35}/>
                            <SiMicrosoftazure  className="ml-6" size={35}/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full flex">
                <SiIbm size={150} className='text-white/50'/>
                <div className="h-[150px] flex items-center ml-10">
                    <Image src='/kyndryl_logo.png' alt="" height={56} width={175} className='opacity-50'/>
                </div>
            </section>
        </div>
    )
}
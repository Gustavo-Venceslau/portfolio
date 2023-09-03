import { FaJava, FaAws } from 'react-icons/fa';
import { SiTypescript, SiReact, SiMicrosoftazure } from 'react-icons/si'
import { HiCode } from 'react-icons/hi';

export function LeftSideContent(){
	return (
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
	)
}
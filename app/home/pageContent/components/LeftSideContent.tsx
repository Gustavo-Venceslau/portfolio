import { FaJava, FaAws } from 'react-icons/fa';
import { SiTypescript, SiReact, SiMicrosoftazure } from 'react-icons/si'
import { HiCode } from 'react-icons/hi';

export function LeftSideContent(){
	return (
		<div className="w-1/2 hidden xl:flex justify-end items-center">
			<div className="w-[500px] h-[500px] 2xl:w-[550px] 2xl:h-[550px] rounded-full bg-[#2b4c7e] mt-8 flex justify-center items-center shadow-xl flex-col">
				<HiCode className='mb-4 text-[#1f1f20] w-80 h-80 2xl:w-[325px] 2xl:h-[325px]'/>
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
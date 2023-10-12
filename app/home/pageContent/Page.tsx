import Image from "next/image";
import { SiIbm } from 'react-icons/si';
import { RightSideContent } from "./components/RightSideContent";
import { LeftSideContent } from "./components/LeftSideContent";

export function PageContent(){
    return(
        <div className="bg-[#1f1f20] md:px-20 xs:px-7 w-full md:h-[91vh] xs:h-[70vh]">
            <section className="w-full flex md:flex-row xs:flex-col">
                <RightSideContent />
                <LeftSideContent />
            </section>
            <section className="w-full flex gap-10">
                <SiIbm 
					size={150} 
					className='text-white/50'
				/>
                <div className="flex items-center">
                    <Image 
						src='/kyndryl_logo.png' 
						alt="Kyndryl" 
						height={56} 
						width={175} 
						className='opacity-50'/>
                </div>
            </section>
        </div>
    )
}
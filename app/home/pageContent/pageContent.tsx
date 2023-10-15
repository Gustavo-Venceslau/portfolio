import Image from "next/image";
import { SiIbm } from 'react-icons/si';
import { RightSideContent } from "./components/RightSideContent";
import { LeftSideContent } from "./components/LeftSideContent";

export function PageContent(){
    return(
        <div className="bg-[#1f1f20] lg:px-20 px-7 w-full h-[70vh] lg:h-[75vh] xl:h-[calc(100vh-80px)]">
            <section className="w-full flex lg:flex-row">
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
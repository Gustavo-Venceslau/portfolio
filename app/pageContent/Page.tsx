import Image from "next/image";
import { SiIbm } from 'react-icons/si';
import { RightSideContent } from "./components/RightSideContent";
import { LeftSideContent } from "./components/LeftSideContent";

export function PageContent(){
    return(
        <div className="px-20 w-full h-[90vh]">
            <section className="w-full flex flex-row">
                <RightSideContent />
                <LeftSideContent />
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
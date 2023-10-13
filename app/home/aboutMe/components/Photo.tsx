import Image from "next/image"

export function Photo(){
	return (
		<div className="md:w-1/2 xs:w-full flex justify-center pb-5">
			<div className="flex items-center justify-center -translate-y-10">
				<Image 
					src='/photo.png' 
					alt='profile photo' 
					height={100} 
					width={300} 
					className='rounded-full z-50 lg:w-[300px] w-[240px] translate-y-[10px] lg:translate-y-0'
				/>
				<div 
					className="bg-[#567ebb] rounded-full lg:w-[300px] w-60 lg:h-[300px] h-60 absolute translate-y-[68px]"
				>
				</div>
				<div 
					className="border-2 border-[#567ebb] rounded-full lg:w-[400px] w-80 lg:h-[400px] h-80 absolute translate-y-[68px]"
				>
				</div>
			</div>
		</div>
	)
}
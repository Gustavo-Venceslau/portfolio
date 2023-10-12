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
					className='rounded-full z-50 md:w-[300px] xs:w-60'
				/>
				<div 
					className="bg-[#567ebb] rounded-full md:w-[300px] xs:w-60 md:h-[300px] xs:h-60 absolute translate-y-[68px]"
				>
				</div>
				<div 
					className="border-2 border-[#567ebb] rounded-full md:w-[400px] xs:w-80 md:h-[400px] xs:h-80 absolute translate-y-[68px]"
				>
				</div>
			</div>
		</div>
	)
}
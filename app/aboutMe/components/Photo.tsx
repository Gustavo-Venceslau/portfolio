import Image from "next/image"

export function Photo(){
	return (
		<div className="w-1/2 flex justify-center">
			<div className="flex items-center justify-center -translate-y-10">
				<Image 
					src='/photo.png' 
					alt='profile photo' 
					height={100} 
					width={300} 
					className='rounded-full z-50'
				/>
				<div 
					className="bg-[#567ebb] rounded-full w-[300px] h-[300px] absolute translate-y-[68px]"
				>
				</div>
				<div 
					className="border-2 border-[#567ebb] rounded-full w-[400px] h-[400px] absolute translate-y-[68px]"
				>
				</div>
			</div>
		</div>
	)
}
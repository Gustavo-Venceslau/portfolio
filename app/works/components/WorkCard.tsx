import Image from "next/image";

interface WorkCardProps{
	imageURL: string,
	imageSize: number,
	jobTitle: string,
	responsibilities: string[]
}

export function WorkCard({imageURL, imageSize, jobTitle, responsibilities}:WorkCardProps){
	return(
		<div className="min-w-[720px] h-[480px] bg-[#1F1F20] rounded-2xl p-8 mx-4 shadow-[2px_4px_4px_2px_rgba(0,0,0,0.25)]">
			<Image 
				src={imageURL} 
				alt="company logo" width={imageSize} 
				height={imageSize}
			/>
			<div className="mt-4">
				<section>
					<h2 className="text-lg font-bold text-[#567EBB]">JOB TITLE</h2>
					<span className="text-[15px] font-medium text-white">{jobTitle}</span>
				</section>
				<section className="mt-4">
					<h2 className="text-lg font-bold text-[#567EBB]">RESPONSIBILITIES</h2>
					<ul className="list-disc ml-6 text-[15px] font-medium text-justify">
						{
							responsibilities
								.map((responsability, index) => 
									<li 
										key={index}
										className="text-white"
									>{responsability}</li>)
						}
					</ul>
				</section>
			</div>
		</div>
	);
}
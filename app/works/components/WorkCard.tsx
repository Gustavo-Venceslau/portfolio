import Image from "next/image";



export function WorkCard(){
	return(
		<div className="w-[720px] h-[480px] shadow-[0_5px_10px_2px_rgba(0,0,0,0.3)] rounded-2xl p-8">
			<Image 
				src="/Kyndryl_logo.svg.png" 
				alt="company logo" width={200} 
				height={200}
			/>
			<div className="mt-4">
				<section>
					<h2 className="text-lg font-bold text-[#567EBB]">JOB TITLE</h2>
					<span className="text-[15px] font-medium">Intern</span>
				</section>
				<section className="mt-4">
					<h2 className="text-lg font-bold text-[#567EBB]">RESPONSIBILITIES</h2>
					<ul className="list-disc ml-6 text-[15px] font-medium text-justify">
						<li>UI development in NextJS and Typescript, for internal applications that use a robot to automate internal company processes such as Oncall and others. Thus, helping users to have a better experience and use of internal tools.</li>
						<li>Creation of static pages developed in HTML and CSS to provide a page with all the highlights of the month.</li>
						<li>Acting in Incidents and Customer Requests as a SQL Server DBA, helping with user permissions, job maintenance, and disk space issues, among others. Thus, maintaining the performance and stability of the clients environment for their applications.</li>
						<li>DevOps training, to learn about the culture and the main tools, focusing on the code part of the DevOps treadmill, developing Java Spring applications, using tools like Docker, Jenkins, Kubernetes, and Terraform.</li>
					</ul>
				</section>
			</div>
		</div>
	);
}
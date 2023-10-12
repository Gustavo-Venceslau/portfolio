interface InfoLabelProps {
	title: string,
	info: string
}

export function InfoLabel({title, info}:InfoLabelProps){
	return (
		<div className="mb-8">
			<h1 className="text-[#1f1f20] font-bold">{title}</h1>
			<h3 className="text-[#606d80]/70">{info}</h3>
        </div>
	)
}
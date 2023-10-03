import { ContactForm } from "./components/contactForm";

export function TalkToMe(){
	return(
		<div className="w-full h-[600px] flex flex-row">
			<div className="w-1/2 h-full flex justify-center items-center">
				<ContactForm />
			</div>
			<div
				className="w-1/2 h-full"
			>
			</div>
		</div>
	)
}
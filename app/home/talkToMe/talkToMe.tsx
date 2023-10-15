import { ContactForm } from "./components/contactForm";
import { TextAndContacts } from "./components/textAndContacts";

export function TalkToMe(){
	return(
		<div className="w-full px-7 lg:px-20 py-16 flex lg:flex-row flex-col-reverse pb-10" id="TalkToMe">
			<div className="w-full lg:w-1/2 h-full flex justify-center items-center">
				<ContactForm />
			</div>
			<div
				className="w-full lg:w-1/2 h-full flex items-center flex-col pb-10"
			>
				<TextAndContacts />
			</div>

		</div>
	)
}
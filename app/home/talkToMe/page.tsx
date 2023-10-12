import { ContactForm } from "./components/contactForm";
import { TextAndContacts } from "./components/textAndContacts";

export function TalkToMe(){
	return(
		<div className="w-full px-20 py-16 flex md:flex-row xs:flex-col" id="TalkToMe">
			<div className="w-1/2 h-full flex justify-center items-center">
				<ContactForm />
			</div>
			<div
				className="w-1/2 h-full flex items-center flex-col"
			>
				<TextAndContacts />
			</div>

		</div>
	)
}
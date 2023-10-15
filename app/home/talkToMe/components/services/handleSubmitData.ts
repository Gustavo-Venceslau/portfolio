import { formData } from "./iFormData";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";

export const handleSubmitData = ({Name, Email, Message}: formData) => {
	const templateParams = {
		from_name: Name,
		message: Message,
		email: Email
	}

	if(process.env.NEXT_PUBLIC_SERVICE_ID && process.env.NEXT_PUBLIC_TEMPLATE_ID && process.env.NEXT_PUBLIC_PUBLIC_KEY){
		emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_PUBLIC_KEY)
		.then((response) => {
			toast.success("message sent!")
		}, (error) => {
			toast.error("something is wrong, try again later!");
		});
	}		
}
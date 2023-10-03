"use client"

import { useForm } from "react-hook-form";
import { InputField } from "./inputField";

export interface formData {
	Email: string,
	Subject: string,
	Message: string
}

export function ContactForm(){
	const { handleSubmit, register } = useForm();

	const handleSubmitData = (data: any) => {
		console.log(data);
	}

	return(
		<div className="w-[560px] h-[480px] bg-[#1F1F20] rounded-xl px-14 py-8">
			<form 
				className="flex flex-col gap-6"
				onSubmit={handleSubmit(handleSubmitData)}
			>
				<InputField 
					field="Email"
					placeholder="Type your email..."
					register={register}
				/>
				<InputField 
					field="Subject"
					placeholder="Type the subject..."
					register={register}
				/>
				<InputField 
					field="Message"
					placeholder="Type your message..."
					register={register}
				/>
				<div className="w-full flex justify-center">
					<button 
						className="px-14 py-4 rounded-full bg-[#2B4C7E] text-white font-semibold mt-10 hover:bg-[#2B4C7E]/80"
						type="submit"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	)
}
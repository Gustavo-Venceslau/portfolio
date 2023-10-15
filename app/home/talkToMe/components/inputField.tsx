"use client";

import { UseFormRegister } from "react-hook-form"

interface InputFieldProps{
	field: string,
	placeholder: string,
	register: UseFormRegister<any>
}

export function InputField({field, placeholder, register}:InputFieldProps){

	return(
		<div className="w-full flex flex-col">
		<label
			htmlFor={field}
			className="text-white font-semibold text-lg"
		>
			{field}
		</label>
		<input {...register(field)}
			type="text" 
			name={field}
			className="rounded-lg h-10 pl-2 py-6 mt-2"
			placeholder={placeholder}
			id={field}
		/>
	</div>
	)
}
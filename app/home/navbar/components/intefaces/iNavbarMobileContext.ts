import { Dispatch, SetStateAction } from "react";

export interface INavbarMobileContext {
	isVisible: boolean,
	setIsVisible: Dispatch<SetStateAction<boolean>>
}
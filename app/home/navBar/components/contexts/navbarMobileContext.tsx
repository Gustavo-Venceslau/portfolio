"use client";

import { createContext, useContext, useState } from "react";
import { INavbarMobileContext } from "../intefaces/iNavbarMobileContext";

const NavbarMobileContext = createContext<INavbarMobileContext>(null!);

export function NavbarMobileContextProvider({children}: { children: React.ReactNode }) {
	const [isVisible, setIsVisible] = useState(false);
	return <NavbarMobileContext.Provider value={{isVisible, setIsVisible}}>{children}</NavbarMobileContext.Provider>
}

export function useNavMobileContext() {
	return useContext(NavbarMobileContext);
}
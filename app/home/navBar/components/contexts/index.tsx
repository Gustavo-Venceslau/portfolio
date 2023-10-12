import { NavbarMobileContextProvider } from "./navbarMobileContext";

export * from './navbarMobileContext';

export function AppContexts({children}: {children: React.ReactNode}) {
	return (
		<>
			<NavbarMobileContextProvider>{children}</NavbarMobileContextProvider>
		</>
	);
}
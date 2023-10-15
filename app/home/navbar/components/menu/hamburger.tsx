import { GiHamburgerMenu } from 'react-icons/gi';

interface HamburgerProps {
	onClick: VoidFunction;
}

export function Hamburger({onClick}: HamburgerProps){
	return(
		<button 
			className='flex lg:hidden'
			onClick={onClick}
		>
			<GiHamburgerMenu 
				color='#2B4C7E'
				size={30}
			/>
		</button>
	)
}
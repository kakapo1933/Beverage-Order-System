import { Link } from 'react-router-dom';

interface CartIconProps {
	cartCount: number;
	id: string;
	isMobile?: boolean;
}

const CartIcon = ({ cartCount, id, isMobile = false }: CartIconProps) => {
	return (
		<div className={`relative ${isMobile ? 'md:hidden' : 'hidden md:block'}`}>
			<Link
				to='/cart'
				className='flex items-center hover:text-secondary-400 transition-colors'
				aria-label={`Shopping cart with ${cartCount} items`}>
				<span id={id} className='text-2xl transition-all duration-300' aria-hidden='true'>
					🛒
				</span>
				{cartCount > 0 && (
					<span
						className='absolute -top-2 -right-2 bg-secondary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'
						aria-hidden='true'>
						{cartCount}
					</span>
				)}
			</Link>
		</div>
	);
};

export default CartIcon;

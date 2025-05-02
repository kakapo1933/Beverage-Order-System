import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface FooterNavProps {
	showCoupons: boolean;
	setShowCoupons: (show: boolean) => void;
}

const FooterNav = ({ showCoupons, setShowCoupons }: FooterNavProps) => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<nav aria-label='Main navigation'>
			<div className='flex justify-around mb-4'>
				<button
					className={`flex flex-col items-center p-2 ${
						location.pathname === '/' ? 'text-secondary-500' : 'text-gray-600'
					}`}
					onClick={() => navigate('/')}
					aria-label='Home'
					aria-current={location.pathname === '/' ? 'page' : undefined}>
					<span className='text-xl' aria-hidden='true'>
						🏠
					</span>
					<span className='text-xs mt-1'>Home</span>
				</button>
				<button
					className={`flex flex-col items-center p-2 ${showCoupons ? 'text-secondary-500' : 'text-gray-600'}`}
					onClick={() => setShowCoupons(!showCoupons)}
					aria-label='Coupons'
					aria-expanded={showCoupons}>
					<span className='text-xl' aria-hidden='true'>
						🎟️
					</span>
					<span className='text-xs mt-1'>Coupons</span>
				</button>
				<button
					className={`flex flex-col items-center p-2 ${
						location.pathname === '/orders' ? 'text-secondary-500' : 'text-gray-600'
					}`}
					onClick={() => navigate('/orders')}
					aria-label='Orders'
					aria-current={location.pathname === '/orders' ? 'page' : undefined}>
					<span className='text-xl' aria-hidden='true'>
						📋
					</span>
					<span className='text-xs mt-1'>Orders</span>
				</button>
				<button
					className={`flex flex-col items-center p-2 ${
						location.pathname === '/profile' ? 'text-secondary-500' : 'text-gray-600'
					}`}
					onClick={() => navigate('/profile')}
					aria-label='Profile'
					aria-current={location.pathname === '/profile' ? 'page' : undefined}>
					<span className='text-xl' aria-hidden='true'>
						👤
					</span>
					<span className='text-xs mt-1'>Profile</span>
				</button>
				<button
					className={`flex flex-col items-center p-2 ${
						location.pathname === '/settings' ? 'text-secondary-500' : 'text-gray-600'
					}`}
					onClick={() => navigate('/settings')}
					aria-label='Settings'
					aria-current={location.pathname === '/settings' ? 'page' : undefined}>
					<span className='text-xl' aria-hidden='true'>
						⚙️
					</span>
					<span className='text-xs mt-1'>Settings</span>
				</button>
			</div>
		</nav>
	);
};

export default FooterNav;

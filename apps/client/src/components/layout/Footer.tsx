import React from 'react';
import CouponCenter from './CouponCenter';
import FooterNav from './FooterNav';

interface FooterProps {
	showCoupons: boolean;
	setShowCoupons: (show: boolean) => void;
}

const Footer = ({ showCoupons, setShowCoupons }: FooterProps) => {
	return (
		<footer className='bg-gray-100 border-t'>
			<div className='container mx-auto px-4 py-4'>
				{/* Coupon Center */}
				<CouponCenter showCoupons={showCoupons} setShowCoupons={setShowCoupons} />

				{/* Multi-functional Navigation Bar */}
				<FooterNav showCoupons={showCoupons} setShowCoupons={setShowCoupons} />

				{/* Copyright */}
				<div className='text-center text-gray-600 text-sm'>
					<p>&copy; {new Date().getFullYear()} Beverage Order System. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

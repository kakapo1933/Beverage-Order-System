import React from 'react';
import { Button } from '@beverage-order-system/ui';

interface CouponCenterProps {
	showCoupons: boolean;
	setShowCoupons: (show: boolean) => void;
}

const CouponCenter = ({ showCoupons, setShowCoupons }: CouponCenterProps) => {
	if (!showCoupons) return null;

	return (
		<div className='mb-6 p-4 bg-white rounded-lg shadow-md'>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='text-lg font-bold'>Available Coupons</h3>
				<button
					className='text-gray-500 hover:text-gray-700'
					onClick={() => setShowCoupons(false)}
					aria-label='Close coupon center'>
					<span aria-hidden='true'>✕</span>
				</button>
			</div>

			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4' role='list' aria-label='Available coupons'>
				{/* Coupon Card 1 */}
				<div
					className='border border-dashed border-secondary-300 rounded-lg p-3 bg-secondary-50 relative'
					role='listitem'>
					<div className='absolute top-2 right-2 text-xs font-semibold text-red-500' aria-live='polite'>
						Expires in 2 days
					</div>
					<h4 className='text-xl font-bold text-secondary-500 mb-1'>20% OFF</h4>
					<div className='text-sm mb-2'>On all coffee drinks</div>
					<div className='text-xs text-gray-500 mb-3'>Min. order $10</div>
					<Button
						variant='secondary'
						size='sm'
						className='w-full'
						onClick={() => {
							alert('Coupon applied!');
							setShowCoupons(false);
						}}
						aria-label='Apply 20% off coupon for coffee drinks'>
						Apply Coupon
					</Button>
				</div>

				{/* Coupon Card 2 */}
				<div
					className='border border-dashed border-secondary-300 rounded-lg p-3 bg-secondary-50 relative'
					role='listitem'>
					<div className='absolute top-2 right-2 text-xs font-semibold text-red-500' aria-live='polite'>
						Expires in 5 days
					</div>
					<h4 className='text-xl font-bold text-secondary-500 mb-1'>Buy 1 Get 1</h4>
					<div className='text-sm mb-2'>On selected smoothies</div>
					<div className='text-xs text-gray-500 mb-3'>Valid on weekends</div>
					<Button
						variant='secondary'
						size='sm'
						className='w-full'
						onClick={() => {
							alert('Coupon applied!');
							setShowCoupons(false);
						}}
						aria-label='Apply buy one get one coupon for smoothies'>
						Apply Coupon
					</Button>
				</div>

				{/* Coupon Card 3 */}
				<div
					className='border border-dashed border-secondary-300 rounded-lg p-3 bg-secondary-50 relative'
					role='listitem'>
					<div className='absolute top-2 right-2 text-xs font-semibold text-red-500' aria-live='polite'>
						Expires today
					</div>
					<h4 className='text-xl font-bold text-secondary-500 mb-1'>$5 OFF</h4>
					<div className='text-sm mb-2'>On your first order</div>
					<div className='text-xs text-gray-500 mb-3'>New customers only</div>
					<Button
						variant='secondary'
						size='sm'
						className='w-full'
						onClick={() => {
							alert('Coupon applied!');
							setShowCoupons(false);
						}}
						aria-label='Apply $5 off coupon for your first order'>
						Apply Coupon
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CouponCenter;

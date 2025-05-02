import React from 'react';
import { Button } from '@beverage-order-system/ui';

interface DemoProductProps {
	handleAddToCart: () => void;
}

const DemoProduct = ({ handleAddToCart }: DemoProductProps) => {
	return (
		<div className='mt-8 p-4 bg-white rounded-lg shadow-md'>
			<h2 className='text-xl font-bold mb-4'>Demo Product</h2>
			<p>This is a demo product to show the "Add to Cart" functionality.</p>
			<Button variant='primary' className='mt-4' onClick={handleAddToCart}>
				Add to Cart
			</Button>
		</div>
	);
};

export default DemoProduct;

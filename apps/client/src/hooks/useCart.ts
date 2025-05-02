import { useState } from 'react';

export const useCart = () => {
	const [cartCount, setCartCount] = useState(0);

	const handleAddToCart = () => {
		// Animation effect when adding to a cart
		setCartCount((prev) => prev + 1);
		// Animate desktop cart icon
		const cartIcon = document.getElementById('cart-icon');
		if (cartIcon) {
			cartIcon.classList.add('animate-bounce');
			setTimeout(() => {
				cartIcon.classList.remove('animate-bounce');
			}, 1000);
		}
		// Animate mobile cart icon
		const mobileCartIcon = document.getElementById('cart-icon-mobile');
		if (mobileCartIcon) {
			mobileCartIcon.classList.add('animate-bounce');
			setTimeout(() => {
				mobileCartIcon.classList.remove('animate-bounce');
			}, 1000);
		}
	};

	return {
		cartCount,
		setCartCount,
		handleAddToCart
	};
};

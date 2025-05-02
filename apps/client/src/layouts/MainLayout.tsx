import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DemoProduct from '../components/layout/DemoProduct';
import { categories } from '@/data/categories';
import { useCart } from '@/hooks/useCart';

const MainLayout = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('featured');
	const [showCoupons, setShowCoupons] = useState(false);
	const { cartCount, handleAddToCart } = useCart();

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault();
	};

	return (
		<div className='min-h-screen flex flex-col'>
			{/* Header Section */}
			<Header
				cartCount={cartCount}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
				handleSearch={handleSearch}
				categories={categories}
				selectedCategory={selectedCategory}
				setSelectedCategory={setSelectedCategory}
			/>

			{/* Body Section */}
			<main className='flex-grow container mx-auto px-4 py-8'>
				<Outlet />
				{/* Demo Product Card - For demonstration purposes */}
				<DemoProduct handleAddToCart={handleAddToCart} />
			</main>

			{/* Footer Section */}
			<Footer showCoupons={showCoupons} setShowCoupons={setShowCoupons} />
		</div>
	);
};

export default MainLayout;

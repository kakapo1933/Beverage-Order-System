import React from 'react';
import CartIcon from './CartIcon';
import SearchBar from './SearchBar';
import CategoryNav from './CategoryNav';
import { Category } from '@/types/layout';

interface HeaderProps {
	cartCount: number;
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	handleSearch: (e: React.FormEvent) => void;
	categories: Category[];
	selectedCategory: string;
	setSelectedCategory: (id: string) => void;
}

const Header = ({
	cartCount,
	searchQuery,
	setSearchQuery,
	handleSearch,
	categories,
	selectedCategory,
	setSelectedCategory
}: HeaderProps) => {
	return (
		<header className='bg-primary-600 text-white shadow-md'>
			<div className='container mx-auto px-4 py-4'>
				{/* Top Header Row */}
				<div className='flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0'>
					<div className='flex justify-between w-full md:w-auto'>
						<div className='text-xl font-bold'>Beverage Order System</div>
						{/* Shopping Cart - Mobile Position */}
						<CartIcon cartCount={cartCount} id='cart-icon-mobile' isMobile={true} />
					</div>
					{/* Search Bar */}
					<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} handleSearch={handleSearch} />
					{/* Shopping Cart - Desktop Position */}
					<CartIcon cartCount={cartCount} id='cart-icon' />
				</div>
				{/* Category Navigation */}
				<CategoryNav
					categories={categories}
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
			</div>
		</header>
	);
};

export default Header;

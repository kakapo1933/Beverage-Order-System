import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@beverage-order-system/ui';

const MainLayout = () => {
	const [cartCount, setCartCount] = useState(0);
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('featured');
	const [showCoupons, setShowCoupons] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	// Mock categories for demonstration
	const categories = [
		{
			id: 'featured',
			name: 'Featured',
			icon: '⭐'
		},
		{
			id: 'coffee',
			name: 'Coffee',
			icon: '☕'
		},
		{
			id: 'tea',
			name: 'Tea',
			icon: '🍵'
		},
		{
			id: 'smoothies',
			name: 'Smoothies',
			icon: '🥤'
		},
		{
			id: 'juices',
			name: 'Juices',
			icon: '🧃'
		},
		{
			id: 'specials',
			name: 'Specials',
			icon: '✨'
		}
	];

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

	const handleSearch = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		// console.log('Searching for:', searchQuery);
		// Implement search functionality
	};
	return (
		<div className='min-h-screen flex flex-col'>
			{/* Header Section */}
			<header className='bg-primary-600 text-white shadow-md'>
				<div className='container mx-auto px-4 py-4'>
					{/* Top Header Row */}
					<div className='flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0'>
						<div className='flex justify-between w-full md:w-auto'>
							<div className='text-xl font-bold'>Beverage Order System</div>

							{/* Shopping Cart - Mobile Position */}
							<div className='relative md:hidden'>
								<Link
									to='/cart'
									className='flex items-center hover:text-secondary-400 transition-colors'
									aria-label={`Shopping cart with ${cartCount} items`}
								>
									<span
										id='cart-icon-mobile'
										className='text-2xl transition-all duration-300'
										aria-hidden='true'
									>
										🛒
									</span>
									{cartCount > 0 && (
										<span
											className='absolute -top-2 -right-2 bg-secondary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'
											aria-hidden='true'
										>
											{cartCount}
										</span>
									)}
								</Link>
							</div>
						</div>

						{/* Search Bar */}
						<div className='flex-grow w-full md:w-auto md:mx-8 max-w-2xl'>
							<form onSubmit={handleSearch} className='relative'>
								<input
									type='text'
									placeholder='Search beverages...'
									className='w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary-400'
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									aria-label='Search beverages'
									role='searchbox'
								/>
								<button
									type='submit'
									className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
									aria-label='Search'
								>
									🔍
								</button>
								<button
									type='button'
									className='absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
									aria-label='Voice search'
								>
									🎤
								</button>
							</form>
						</div>

						{/* Shopping Cart - Desktop Position */}
						<div className='relative hidden md:block'>
							<Link
								to='/cart'
								className='flex items-center hover:text-secondary-400 transition-colors'
								aria-label={`Shopping cart with ${cartCount} items`}
							>
								<span
									id='cart-icon'
									className='text-2xl transition-all duration-300'
									aria-hidden='true'
								>
									🛒
								</span>
								{cartCount > 0 && (
									<span
										className='absolute -top-2 -right-2 bg-secondary-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center'
										aria-hidden='true'
									>
										{cartCount}
									</span>
								)}
							</Link>
						</div>
					</div>

					{/* Category Navigation */}
					<div className='overflow-x-auto pb-2'>
						<nav className='flex space-x-4' aria-label='Product categories'>
							{categories.map((category) => (
								<button
									key={category.id}
									className={`flex items-center px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
										selectedCategory === category.id
											? 'bg-secondary-500 text-white'
											: 'bg-white/10 hover:bg-white/20 text-white'
									}`}
									onClick={() => setSelectedCategory(category.id)}
									aria-pressed={selectedCategory === category.id}
									aria-label={`${category.name} category`}
								>
									<span className='mr-2' aria-hidden='true'>
										{category.icon}
									</span>
									<span>{category.name}</span>
								</button>
							))}
						</nav>
					</div>
				</div>
			</header>

			{/* Body Section */}
			<main className='flex-grow container mx-auto px-4 py-8'>
				<Outlet />

				{/* Demo Product Card - For demonstration purposes */}
				<div className='mt-8 p-4 bg-white rounded-lg shadow-md'>
					<h2 className='text-xl font-bold mb-4'>Demo Product</h2>
					<p>This is a demo product to show the "Add to Cart" functionality.</p>
					<Button variant='primary' className='mt-4' onClick={handleAddToCart}>
						Add to Cart
					</Button>
				</div>
			</main>

			{/* Footer Section */}
			<footer className='bg-gray-100 border-t'>
				<div className='container mx-auto px-4 py-4'>
					{/* Coupon Center */}
					{showCoupons && (
						<div className='mb-6 p-4 bg-white rounded-lg shadow-md'>
							<div className='flex justify-between items-center mb-4'>
								<h3 className='text-lg font-bold'>Available Coupons</h3>
								<button
									className='text-gray-500 hover:text-gray-700'
									onClick={() => setShowCoupons(false)}
									aria-label='Close coupon center'
								>
									<span aria-hidden='true'>✕</span>
								</button>
							</div>

							<div
								className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
								role='list'
								aria-label='Available coupons'
							>
								{/* Coupon Card 1 */}
								<div
									className='border border-dashed border-secondary-300 rounded-lg p-3 bg-secondary-50 relative'
									role='listitem'
								>
									<div
										className='absolute top-2 right-2 text-xs font-semibold text-red-500'
										aria-live='polite'
									>
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
										aria-label='Apply 20% off coupon for coffee drinks'
									>
										Apply Coupon
									</Button>
								</div>

								{/* Coupon Card 2 */}
								<div
									className='border border-dashed border-secondary-300 rounded-lg p-3 bg-secondary-50 relative'
									role='listitem'
								>
									<div
										className='absolute top-2 right-2 text-xs font-semibold text-red-500'
										aria-live='polite'
									>
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
										aria-label='Apply buy one get one coupon for smoothies'
									>
										Apply Coupon
									</Button>
								</div>

								{/* Coupon Card 3 */}
								<div
									className='border border-dashed border-secondary-300 rounded-lg p-3 bg-secondary-50 relative'
									role='listitem'
								>
									<div
										className='absolute top-2 right-2 text-xs font-semibold text-red-500'
										aria-live='polite'
									>
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
										aria-label='Apply $5 off coupon for your first order'
									>
										Apply Coupon
									</Button>
								</div>
							</div>
						</div>
					)}

					{/* Multi-functional Navigation Bar */}
					<nav aria-label='Main navigation'>
						<div className='flex justify-around mb-4'>
							<button
								className={`flex flex-col items-center p-2 ${
									location.pathname === '/' ? 'text-secondary-500' : 'text-gray-600'
								}`}
								onClick={() => navigate('/')}
								aria-label='Home'
								aria-current={location.pathname === '/' ? 'page' : undefined}
							>
								<span className='text-xl' aria-hidden='true'>
									🏠
								</span>
								<span className='text-xs mt-1'>Home</span>
							</button>
							<button
								className={`flex flex-col items-center p-2 ${
									showCoupons ? 'text-secondary-500' : 'text-gray-600'
								}`}
								onClick={() => setShowCoupons(!showCoupons)}
								aria-label='Coupons'
								aria-expanded={showCoupons}
							>
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
								aria-current={location.pathname === '/orders' ? 'page' : undefined}
							>
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
								aria-current={location.pathname === '/profile' ? 'page' : undefined}
							>
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
								aria-current={location.pathname === '/settings' ? 'page' : undefined}
							>
								<span className='text-xl' aria-hidden='true'>
									⚙️
								</span>
								<span className='text-xs mt-1'>Settings</span>
							</button>
						</div>
					</nav>

					{/* Copyright */}
					<div className='text-center text-gray-600 text-sm'>
						<p>&copy; {new Date().getFullYear()} Beverage Order System. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default MainLayout;

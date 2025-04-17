import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Import pages
const Home = () => <div>Home Page</div>;
const Menu = () => <div>Menu Page</div>;
const Cart = () => <div>Cart Page</div>;
const NotFound = () => <div>404 - Page Not Found</div>;

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path='menu' element={<Menu />} />
				<Route path='cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;

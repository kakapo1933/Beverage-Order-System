import { Routes, Route } from 'react-router-dom';
import MerchantLayout from './layouts/MerchantLayout';

// Import pages
const Dashboard = () => <div>Dashboard Page</div>;
const OrderManagement = () => <div>Order Management Page</div>;
const MenuManagement = () => <div>Menu Management Page</div>;
const Settings = () => <div>Settings Page</div>;
const NotFound = () => <div>404 - Page Not Found</div>;

function App() {
	return (
		<Routes>
			<Route path='/' element={<MerchantLayout />}>
				<Route index element={<Dashboard />} />
				<Route path='orders' element={<OrderManagement />} />
				<Route path='menu' element={<MenuManagement />} />
				<Route path='settings' element={<Settings />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;

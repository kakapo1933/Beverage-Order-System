import { Outlet, Link, useLocation } from 'react-router-dom';

const MerchantLayout = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'bg-primary-700 text-white' : 'text-primary-100 hover:bg-primary-700/50';
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary-800 text-white">
        <div className="p-4 border-b border-primary-700">
          <h1 className="text-xl font-bold">BOS Merchant</h1>
        </div>
        <nav className="p-2">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/" 
                className={`block px-4 py-2 rounded-md transition-colors ${isActive('/')}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/orders" 
                className={`block px-4 py-2 rounded-md transition-colors ${isActive('/orders')}`}
              >
                Order Management
              </Link>
            </li>
            <li>
              <Link 
                to="/menu" 
                className={`block px-4 py-2 rounded-md transition-colors ${isActive('/menu')}`}
              >
                Menu Management
              </Link>
            </li>
            <li>
              <Link 
                to="/settings" 
                className={`block px-4 py-2 rounded-md transition-colors ${isActive('/settings')}`}
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">
            {location.pathname === '/' && 'Dashboard'}
            {location.pathname === '/orders' && 'Order Management'}
            {location.pathname === '/menu' && 'Menu Management'}
            {location.pathname === '/settings' && 'Settings'}
          </h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <span className="sr-only">Notifications</span>
              <div className="w-6 h-6 text-gray-600">🔔</div>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center text-white">
              M
            </div>
          </div>
        </header>

        <main className="flex-1 p-6 bg-gray-50 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MerchantLayout;
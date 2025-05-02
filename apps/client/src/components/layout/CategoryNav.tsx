import React from 'react';

interface Category {
	id: string;
	name: string;
	icon: string;
}

interface CategoryNavProps {
	categories: Category[];
	selectedCategory: string;
	setSelectedCategory: (id: string) => void;
}

const CategoryNav = ({ categories, selectedCategory, setSelectedCategory }: CategoryNavProps) => {
	return (
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
						aria-label={`${category.name} category`}>
						<span className='mr-2' aria-hidden='true'>
							{category.icon}
						</span>
						<span>{category.name}</span>
					</button>
				))}
			</nav>
		</div>
	);
};

export default CategoryNav;

import React from 'react';

interface SearchBarProps {
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	handleSearch: (e: React.FormEvent) => void;
}

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }: SearchBarProps) => {
	return (
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
					aria-label='Search'>
					🔍
				</button>
				<button
					type='button'
					className='absolute right-10 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700'
					aria-label='Voice search'>
					🎤
				</button>
			</form>
		</div>
	);
};

export default SearchBar;

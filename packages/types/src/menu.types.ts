/**
 * Category interface
 */
export interface Category {
	id: string;
	name: string;
	description?: string;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * Product interface
 */
export interface Product {
	id: string;
	name: string;
	description?: string;
	price: number;
	imageUrl?: string;
	available: boolean;
	categoryId: string;
	categoryName?: string;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * Create category DTO
 */
export interface CreateCategoryDto {
	name: string;
	description?: string;
}

/**
 * Update category DTO
 */
export interface UpdateCategoryDto {
	name?: string;
	description?: string;
}

/**
 * Create product DTO
 */
export interface CreateProductDto {
	name: string;
	description?: string;
	price: number;
	imageUrl?: string;
	available?: boolean;
	categoryId: string;
}

/**
 * Update product DTO
 */
export interface UpdateProductDto {
	name?: string;
	description?: string;
	price?: number;
	imageUrl?: string;
	available?: boolean;
	categoryId?: string;
}

/**
 * Menu interface (categories with products)
 */
export interface Menu {
	categories: (Category & {
		products: Product[];
	})[];
}

/**
 * Product filter options
 */
export interface ProductFilterOptions {
	categoryId?: string;
	available?: boolean;
	minPrice?: number;
	maxPrice?: number;
	search?: string;
}

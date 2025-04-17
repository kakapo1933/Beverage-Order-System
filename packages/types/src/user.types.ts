/**
 * User role enum
 */
export enum UserRole {
	ADMIN = 'ADMIN',
	MERCHANT = 'MERCHANT',
	CUSTOMER = 'CUSTOMER'
}

/**
 * User interface
 */
export interface User {
	id: string;
	email: string;
	name: string;
	role: UserRole;
	createdAt: Date;
	updatedAt: Date;
}

/**
 * User creation DTO
 */
export interface CreateUserDto {
	email: string;
	password: string;
	name: string;
	role?: UserRole;
}

/**
 * User update DTO
 */
export interface UpdateUserDto {
	email?: string;
	password?: string;
	name?: string;
	role?: UserRole;
}

/**
 * User login DTO
 */
export interface LoginDto {
	email: string;
	password: string;
}

/**
 * Auth response
 */
export interface AuthResponse {
	user: User;
	token: string;
}

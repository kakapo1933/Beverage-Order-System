import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Button variant
	 */
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost';

	/**
	 * Button size
	 */
	size?: 'sm' | 'md' | 'lg';

	/**
	 * Whether the button is in a loading state
	 */
	isLoading?: boolean;

	/**
	 * Icon to display before the button text
	 */
	leftIcon?: React.ReactNode;

	/**
	 * Icon to display after the button text
	 */
	rightIcon?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			variant = 'primary',
			size = 'md',
			isLoading = false,
			leftIcon,
			rightIcon,
			disabled,
			children,
			...props
		},
		ref
	) => {
		return (
			<button
				className={cn(
					'btn',
					`btn-${variant}`,
					`btn-${size}`,
					isLoading && 'opacity-70 pointer-events-none',
					className
				)}
				disabled={disabled || isLoading}
				ref={ref}
				{...props}
			>
				{isLoading && (
					<svg
						className='mr-2 h-4 w-4 animate-spin'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
					>
						<circle
							className='opacity-25'
							cx='12'
							cy='12'
							r='10'
							stroke='currentColor'
							strokeWidth='4'
						></circle>
						<path
							className='opacity-75'
							fill='currentColor'
							d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
						></path>
					</svg>
				)}

				{!isLoading && leftIcon && <span className='mr-2'>{leftIcon}</span>}

				{children}

				{!isLoading && rightIcon && <span className='ml-2'>{rightIcon}</span>}
			</button>
		);
	}
);

Button.displayName = 'Button';

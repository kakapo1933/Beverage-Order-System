import React, { ButtonHTMLAttributes, useTransition } from 'react';
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

	/**
	 * Ref for the button element
	 */
	ref?: React.Ref<HTMLButtonElement>;

	/**
	 * Whether to use React's useTransition for smoother UI updates
	 * when the button click triggers expensive operations
	 */
	useTransitionEffect?: boolean;

	/**
	 * Callback for when the transition starts
	 */
	onTransitionStart?: () => void;

	/**
	 * Callback for when the transition completes
	 */
	onTransitionComplete?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
	className,
	variant = 'primary',
	size = 'md',
	isLoading = false,
	leftIcon,
	rightIcon,
	disabled,
	children,
	ref,
	useTransitionEffect = false,
	onTransitionStart,
	onTransitionComplete,
	onClick,
	...props
}: ButtonProps) => {
	// Use React's useTransition hook for smoother UI updates
	const [isPending, startTransition] = useTransition();

	// Handle click with transition if enabled
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		if (useTransitionEffect && onClick) {
			// Notify that transition is starting
			onTransitionStart?.();

			// Use startTransition to mark the update as non-urgent
			startTransition(() => {
				onClick(e);
				// Notify that transition is complete
				onTransitionComplete?.();
			});
		} else if (onClick) {
			// Regular click handling without transition
			onClick(e);
		}
	};

	return (
		<button
			className={cn(
				'btn',
				`btn-${variant}`,
				`btn-${size}`,
				(isLoading || isPending) && 'opacity-70 pointer-events-none',
				className
			)}
			disabled={disabled || isLoading}
			ref={ref}
			onClick={handleClick}
			{...props}>
			{(isLoading || isPending) && (
				<svg className='mr-2 h-4 w-4 animate-spin' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
					<circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
					<path
						className='opacity-75'
						fill='currentColor'
						d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
				</svg>
			)}

			{!isLoading && !isPending && leftIcon && <span className='mr-2'>{leftIcon}</span>}

			{children}

			{!isLoading && !isPending && rightIcon && <span className='ml-2'>{rightIcon}</span>}
		</button>
	);
};

Button.displayName = 'Button';

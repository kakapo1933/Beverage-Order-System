import React, { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
	title?: React.ReactNode;
	showHeader?: boolean;
	footer?: React.ReactNode;
	showFooter?: boolean;
}

/**
 * @discription Card component for displaying content in a contained box
 * @param className - Class name to apply to the card
 * @param title - Card title displayed in the header
 * @param showHeader - Whether to show the card header
 * @param footer - Content for the card footer
 * @param showFooter - Whether to show the card footer
 * @param children - Card content
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, title, showHeader = !!title, footer, showFooter = !!footer, children, ...props }, ref) => {
		return (
			<div className={cn('card', className)} ref={ref} {...props}>
				{showHeader && <div className='card-header'>{title}</div>}
				<div className='card-body'>{children}</div>
				{showFooter && <div className='card-footer'>{footer}</div>}
			</div>
		);
	}
);
import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /**
   * Card title displayed in the header
   */
  title?: React.ReactNode;

  /**
   * Whether to show the card header
   */
  showHeader?: boolean;

  /**
   * Content for the card footer
   */
  footer?: React.ReactNode;

  /**
   * Whether to show the card footer
   */
  showFooter?: boolean;
}

/**
 * Card component for displaying content in a contained box
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      title,
      showHeader = !!title,
      footer,
      showFooter = !!footer,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn('card', className)}
        ref={ref}
        {...props}
      >
        {showHeader && (
          <div className="card-header">
            {title}
          </div>
        )}

        <div className="card-body">
          {children}
        </div>

        {showFooter && (
          <div className="card-footer">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';
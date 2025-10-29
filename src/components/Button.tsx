import React from 'react'
import { cn } from '../utils/cn'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  /**
   * The size of the button
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg'
  /**
   * If true, the button will take the full width of its container
   * @default false
   */
  fullWidth?: boolean
  /**
   * The content of the button
   */
  children: React.ReactNode
}

/**
 * Button component with multiple variants and sizes
 * Themed with light green as default primary color
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    
    const variantStyles = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700',
      secondary: 'bg-primary-100 text-primary-900 hover:bg-primary-200 active:bg-primary-300',
      outline: 'border-2 border-primary-500 text-primary-700 hover:bg-primary-50 active:bg-primary-100',
      ghost: 'text-primary-700 hover:bg-primary-50 active:bg-primary-100',
    }
    
    const sizeStyles = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-6 text-lg',
    }
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

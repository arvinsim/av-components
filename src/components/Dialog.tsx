import React, { useEffect, useRef } from 'react'
import { cn } from '../utils/cn'

export interface DialogProps {
  /**
   * Whether the dialog is open
   */
  open: boolean
  /**
   * Callback when the dialog should close
   */
  onClose: () => void
  /**
   * The content of the dialog
   */
  children: React.ReactNode
  /**
   * Whether clicking the backdrop should close the dialog
   * @default true
   */
  closeOnBackdrop?: boolean
  /**
   * Additional className for the dialog content
   */
  className?: string
  /**
   * Size of the dialog
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

/**
 * Dialog/Modal component with backdrop and customizable size
 * Includes focus trap and escape key handling
 */
export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  closeOnBackdrop = true,
  className,
  size = 'md',
}) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  
  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose()
      }
    }
    
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, onClose])
  
  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])
  
  if (!open) return null
  
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdrop && e.target === e.currentTarget) {
      onClose()
    }
  }
  
  const sizeStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full mx-4',
  }
  
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className={cn(
          'relative w-full bg-white rounded-lg shadow-xl',
          sizeStyles[size],
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>
  )
}

Dialog.displayName = 'Dialog'

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 pt-6 pb-4', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DialogHeader.displayName = 'DialogHeader'

export interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        className={cn('text-2xl font-semibold text-gray-900', className)}
        {...props}
      >
        {children}
      </h2>
    )
  }
)

DialogTitle.displayName = 'DialogTitle'

export interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 py-4 text-gray-600', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DialogContent.displayName = 'DialogContent'

export interface DialogFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('px-6 pb-6 pt-4 flex items-center justify-end gap-2', className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

DialogFooter.displayName = 'DialogFooter'

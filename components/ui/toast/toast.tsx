import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { Close } from '@/components/icons'

import { cn } from '@/lib/utils/cn'
import { buttonStyles } from '../button'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Viewport>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Viewport
		ref={ref}
		className={cn('fixed z-100 flex flex-col gap-4 max-h-screen w-full p-4 bottom-0 right-0 max-w-[480px]', className)}
		{...props}
	/>
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
	'group pointer-events-auto relative flex w-full items-center justify-between overflow-hidden rounded border p-4 transition-all data-[state=open]:animate-slide-in-right data-[state=closed]:animate-slide-out-right',
	{
		variants: {
			variant: {
				default: 'bg-secondary text-primary',
				accent: 'bg-accent-light text-accent',
				danger: 'bg-danger-light text-danger',
				positive: 'bg-positive-light text-positive'
			}
		},
		defaultVariants: {
			variant: 'default'
		}
	}
)

const Toast = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
	return <ToastPrimitives.Root ref={ref} className={cn(toastVariants({ variant }), className)} {...props} />
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Action>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		ref={ref}
		className={cn(buttonStyles({ variant: 'primary', shape: 'round' }), '', className)}
		{...props}
	/>
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Close>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Close
		ref={ref}
		className={cn('absolute top-4 right-4 hover:scale-110', className)}
		// toast-close=""
		{...props}
	>
		<Close />
	</ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Title>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Title ref={ref} className={cn('text-lg font-semibold', className)} {...props} />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Description>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => <ToastPrimitives.Description ref={ref} className={cn(className)} {...props} />)
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
	type ToastProps,
	type ToastActionElement,
	ToastProvider,
	ToastViewport,
	Toast,
	ToastTitle,
	ToastDescription,
	ToastClose,
	ToastAction
}

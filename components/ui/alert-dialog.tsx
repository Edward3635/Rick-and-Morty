'use client'

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { buttonStyles } from './button'
import { cn } from '@/lib/utils/cn'

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = ({ ...props }: AlertDialogPrimitive.AlertDialogPortalProps) => (
	<AlertDialogPrimitive.Portal {...props} />
)
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName

const AlertDialogOverlay = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ ...props }, ref) => <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50" {...props} ref={ref} />)
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
	<AlertDialogPortal>
		<AlertDialogOverlay />
		<AlertDialogPrimitive.Content
			ref={ref}
			className={cn(
				'fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full z-50 max-w-lg bg-primary rounded shadow-lg border overflow-hidden data-[state=open]:animate-dialog-scale-in data-[state=closed]:animate-dialog-scale-out',
				className
			)}
			{...props}
		/>
	</AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogTitle = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ ...props }, ref) => <AlertDialogPrimitive.Title ref={ref} className="text-xl font-semibold" {...props} />)
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ ...props }, ref) => <AlertDialogPrimitive.Description ref={ref} className="text-secondary" {...props} />)
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName

interface AlertDialogHeaderProps {
	title: string
	description?: string
}

const AlertDialogShell = ({
	className,
	title,
	description,
	...props
}: React.HTMLAttributes<HTMLDivElement> & AlertDialogHeaderProps) => (
	<div className="flex items-start justify-between gap-4 p-4" {...props}>
		<div className="flex flex-col gap-2">
			<AlertDialogTitle>{title}</AlertDialogTitle>
			{description && <AlertDialogDescription>{description}</AlertDialogDescription>}
		</div>
	</div>
)
AlertDialogShell.displayName = 'AlertDialogShell'

const AlertDialogFooter = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex w-full gap-4 justify-end p-4', className)} {...props}>
		{children}
	</div>
)
AlertDialogFooter.displayName = 'AlertDialogFooter'

const AlertDialogAction = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Action>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
	<AlertDialogPrimitive.Action ref={ref} {...props} className={(cn(buttonStyles({ variant: 'primary' })), className)} />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
	React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
	React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ ...props }, ref) => (
	<AlertDialogPrimitive.Cancel ref={ref} {...props} className={cn(buttonStyles({ variant: 'ghost' }))} />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
	AlertDialog,
	AlertDialogTrigger,
	AlertDialogContent,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogShell,
	AlertDialogFooter
}

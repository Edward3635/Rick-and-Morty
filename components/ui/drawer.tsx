'use client'

import * as React from 'react'
import * as DrawerPrimitive from '@radix-ui/react-dialog'
import { cva, type VariantProps } from 'class-variance-authority'
import { Close } from '@/components/icons'

import { cn } from '@/lib/utils/cn'
import { buttonStyles } from './button'

const Drawer = DrawerPrimitive.Root

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerClose = DrawerPrimitive.Close

const DrawerPortal = ({ ...props }: DrawerPrimitive.DialogPortalProps) => <DrawerPrimitive.Portal {...props} />
DrawerPortal.displayName = DrawerPrimitive.Portal.displayName

const DrawerOverlay = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Overlay
		className={cn(
			'fixed inset-0 z-50 bg-overlay data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out',
			className
		)}
		{...props}
		ref={ref}
	/>
))
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName

const DrawerVariants = cva('fixed z-50 gap-4 bg-primary shadow-lg overflow-hidden', {
	variants: {
		side: {
			top: 'inset-x-0 top-0 border-b',
			bottom: 'inset-x-0 bottom-0 border-t',
			left: 'inset-y-0 left-0 h-full w-1/3 border-r data-[state=open]:animate-slide-in-left data-[state=closed]:animate-slide-out-left',
			right: 'inset-y-0 right-0 h-full w-3/4 border-l'
		}
	},
	defaultVariants: {
		side: 'right'
	}
})

interface DrawerContentProps
	extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
		VariantProps<typeof DrawerVariants> {}

const DrawerContent = React.forwardRef<React.ElementRef<typeof DrawerPrimitive.Content>, DrawerContentProps>(
	({ side = 'right', className, children, ...props }, ref) => (
		<DrawerPortal>
			<DrawerOverlay />
			<DrawerPrimitive.Content ref={ref} className={cn(DrawerVariants({ side }), className)} {...props}>
				{children}
			</DrawerPrimitive.Content>
		</DrawerPortal>
	)
)
DrawerContent.displayName = DrawerPrimitive.Content.displayName

const DrawerTitle = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Title ref={ref} className={cn('text-xl font-semibold', className)} {...props} />
))
DrawerTitle.displayName = DrawerPrimitive.Title.displayName

const DrawerDescription = React.forwardRef<
	React.ElementRef<typeof DrawerPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DrawerPrimitive.Description ref={ref} className={cn('text-md', className)} {...props} />
))
DrawerDescription.displayName = DrawerPrimitive.Description.displayName

interface DrawerHeaderProps {
	title: string
	description?: string
}

const DrawerHeader = ({
	className,
	title,
	description,
	...props
}: React.HTMLAttributes<HTMLDivElement> & DrawerHeaderProps) => (
	<div className="flex items-start justify-between border-b gap-4 p-4 bg-secondary" {...props}>
		<div className="flex flex-col gap-2">
			<DrawerTitle>{title}</DrawerTitle>
			{description && <DrawerDescription>{description}</DrawerDescription>}
		</div>
		<DrawerPrimitive.Close
			className={cn(buttonStyles({ variant: 'ghost', shape: 'round', size: 'icon-small' }), 'absolute top-3 right-4')}
		>
			<Close />
		</DrawerPrimitive.Close>
	</div>
)
DrawerHeader.displayName = 'DrawerHeader'

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={cn('flex justify-end gap-4 bg-primary p-4 border-t absolute bottom-0 w-full', className)}
		{...props}
	/>
)
DrawerFooter.displayName = 'DrawerFooter'

const DrawerBody = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className="flex flex-col gap-4 p-4" {...props}>
		{children}
	</div>
)
DrawerBody.displayName = 'DrawerBody'

export {
	Drawer,
	DrawerTrigger,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerFooter,
	DrawerTitle,
	DrawerDescription,
	DrawerBody
}

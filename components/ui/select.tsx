'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ExpandMore } from '@/components/icons'

import { cn } from '@/lib/utils/cn'
import { menuItemIndicatorStyles, menuItemStyles, menuStyles } from './menu'
import { buttonStyles } from './button'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

// TRIGGER
const SelectTrigger = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Trigger
		ref={ref}
		className={cn(buttonStyles({ variant: 'ghost' }), 'justify-between', className)}
		{...props}
	>
		{children}
		<SelectPrimitive.Icon asChild>
			<ExpandMore />
		</SelectPrimitive.Icon>
	</SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

// CONTENT
const SelectContent = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
	<SelectPrimitive.Portal>
		<SelectPrimitive.Content
			ref={ref}
			className={cn(
				menuStyles(),
				'min-w-[8rem] p-0',
				position === 'popper' &&
					'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
				className
			)}
			position={position}
			{...props}
		>
			<SelectPrimitive.Viewport
				className={cn(
					'p-1',
					position === 'popper' &&
						'w-full h-[var(--radix-select-trigger-height)] min-w-[var(--radix-select-trigger-width)]'
				)}
			>
				{children}
			</SelectPrimitive.Viewport>
		</SelectPrimitive.Content>
	</SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectLabel = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
	<SelectPrimitive.Label ref={ref} className={cn('p-2 text-secondary font-semibold', className)} {...props} />
))
SelectLabel.displayName = SelectPrimitive.Label.displayName

const SelectItem = React.forwardRef<
	React.ElementRef<typeof SelectPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<SelectPrimitive.Item
		ref={ref}
		className={cn(menuItemStyles(), 'data-[state=checked]:font-medium data-[state=checked]:text-positive', className)}
		{...props}
	>
		<SelectPrimitive.ItemIndicator className={cn(menuItemIndicatorStyles())}>
			<Check />
		</SelectPrimitive.ItemIndicator>

		<SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
	</SelectPrimitive.Item>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

export { Select, SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem }

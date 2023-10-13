'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { Check, ChevronRight, Circle } from '@/components/icons'
import { cn } from '@/lib/utils/cn'
import { menuItemIndicatorStyles, menuItemStyles, menuStyles } from './menu'

const DropdownMenu = DropdownMenuPrimitive.Root

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger

const DropdownMenuGroup = DropdownMenuPrimitive.Group

const DropdownMenuPortal = DropdownMenuPrimitive.Portal

const DropdownMenuSub = DropdownMenuPrimitive.Sub

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup

// SUB-TRIGGER
const DropdownMenuSubTrigger = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
		inset?: boolean
	}
>(({ className, inset, children, ...props }, ref) => (
	<DropdownMenuPrimitive.SubTrigger ref={ref} className={cn(menuItemStyles(), 'justify-between', className)} {...props}>
		{children}
		<ChevronRight />
	</DropdownMenuPrimitive.SubTrigger>
))
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName

// SUB-CONTENT
const DropdownMenuSubContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.SubContent ref={ref} className={cn(menuStyles(), 'min-w-[8rem]', className)} {...props} />
))
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName

// CONTENT
const DropdownMenuContent = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
	<DropdownMenuPrimitive.Portal>
		<DropdownMenuPrimitive.Content
			ref={ref}
			sideOffset={sideOffset}
			className={cn(menuStyles(), 'min-w-[240px]', className)}
			{...props}
		/>
	</DropdownMenuPrimitive.Portal>
))
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName

// ITEM
const DropdownMenuItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>
>(({ className, ...props }, ref) => (
	<DropdownMenuPrimitive.Item ref={ref} className={cn(menuItemStyles(), className)} {...props} />
))
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName

// CHECKBOX-ITEM
const DropdownMenuCheckboxItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
	<DropdownMenuPrimitive.CheckboxItem
		ref={ref}
		className={cn(menuItemStyles(), 'data-[state=checked]:font-medium data-[state=checked]:text-positive', className)}
		checked={checked}
		{...props}
	>
		<DropdownMenuPrimitive.ItemIndicator className={cn(menuItemIndicatorStyles())}>
			<Check />
		</DropdownMenuPrimitive.ItemIndicator>
		{children}
	</DropdownMenuPrimitive.CheckboxItem>
))
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName

// RADIO-ITEM
const DropdownMenuRadioItem = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
	<DropdownMenuPrimitive.RadioItem
		ref={ref}
		className={cn(menuItemStyles(), 'data-[state=checked]:font-medium data-[state=checked]:text-positive', className)}
		{...props}
	>
		<DropdownMenuPrimitive.ItemIndicator className={cn(menuItemIndicatorStyles())}>
			<Circle />
		</DropdownMenuPrimitive.ItemIndicator>
		{children}
	</DropdownMenuPrimitive.RadioItem>
))
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName

// LABEL
const DropdownMenuLabel = React.forwardRef<
	React.ElementRef<typeof DropdownMenuPrimitive.Label>,
	React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
		inset?: boolean
	}
>(({ className, inset, ...props }, ref) => (
	<DropdownMenuPrimitive.Label ref={ref} className="text text-secondary px-2 py-2" {...props} />
))
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName

export {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuCheckboxItem,
	DropdownMenuRadioItem,
	DropdownMenuLabel,
	DropdownMenuGroup,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuRadioGroup
}

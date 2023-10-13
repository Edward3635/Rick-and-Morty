'use client'

import React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

type RadioItemProps = {
	label: string
}

const RadioGroup = RadioGroupPrimitive.Root

// ITEM
const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & RadioItemProps
>(({ className, id, label, ...props }, ref) => (
	<div className="flex items-center">
		<RadioGroupPrimitive.Item
			ref={ref}
			id={id}
			className="h-5 w-5 rounded-full border-radio border-2 hover:border-radio-hover focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-radio-checked"
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-full bg-radio after:bg-radio-checked" />
		</RadioGroupPrimitive.Item>
		<label className="pl-2" htmlFor={id}>
			{label}
		</label>
	</div>
))
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }

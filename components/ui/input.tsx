import { cn } from '@/lib/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import React from 'react'
import { forwardRef } from 'react'

export const inputStyles = cva(
	[
		'w-full',
		'outline-none',
		'px-4',
		'overflow',
		'text-md',
		'focus:ring-offset-white',
		'focus:ring-black',
		'focus:ring-offset-2',
		'focus:ring-2',
		'disabled:bg-disabled',
		'disabled:text-disabled',
		'disabled:hover:cursor-not-allowed',
		'placeholder:text-secondary'
	],
	{
		variants: {
			variant: {
				primary: 'bg-input-primary',
				error: 'bg-danger-light border-danger',
				success: 'bg-positive-light border-positive'
			},
			size: {
				default: 'h-10',
				large: 'h-12'
			},
			shape: {
				rectangle: 'rounded',
				round: 'rounded-full'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'default',
			shape: 'rectangle'
		}
	}
)

export interface InputProps
	extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
		VariantProps<typeof inputStyles> {
	label?: string
	icon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{ variant, size, label, icon, id, type = 'text', placeholder = 'Text here...', className, ...props },
	ref
) {
	return (
		<div className={cn('inline-flex relative items-center', className)}>
			{icon && <div className={`absolute left-4 ${props.disabled && 'text-disabled'}`}>{icon}</div>}
			<input
				ref={ref}
				className={`${inputStyles({ variant, size })} ${icon && '!pl-12'}`}
				id={id}
				type={type}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	)
})

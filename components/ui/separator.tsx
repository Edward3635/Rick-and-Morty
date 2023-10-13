import { cn } from '@/lib/utils/cn'
import { VariantProps, cva } from 'class-variance-authority'
import React, { forwardRef } from 'react'

const separatorStyles = cva(['bg-separator'], {
	variants: {
		orientation: {
			horizontal: 'w-full h-[1px]',
			vertical: 'h-full w-[1px]'
		}
	},
	defaultVariants: {
		orientation: 'horizontal'
	}
})

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof separatorStyles> {}

const Separator = forwardRef<HTMLDivElement, SeparatorProps>(function Separator(
	{ orientation, className, ...props },
	ref
) {
	return <div ref={ref} className={cn(separatorStyles({ orientation }), className)} {...props}></div>
})

Separator.displayName = 'Separator'

export { Separator }

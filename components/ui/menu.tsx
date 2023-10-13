import { cva } from 'class-variance-authority'

export const menuStyles = cva(['flex flex-col gap-0.5 border bg-primary rounded p-2 shadow-md z-[100] overflow-hidden'])

export const menuItemStyles = cva(
	[
		'relative flex gap-2 cursor-default items-center rounded p-2 hover:cursor-pointer outline-none focus:bg-interactive-hover data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
	],
	{
		variants: {
			offset: {
				true: 'pl-9'
			}
		}
	}
)

export const menuItemIndicatorStyles = cva(['absolute right-2 flex items-center justify-center'])

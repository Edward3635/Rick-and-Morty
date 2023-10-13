import { cva } from 'class-variance-authority'

export const typoStyles = cva({
	variants: {
		body: {
			sm: 'text-sm',
			md: 'text-md',
			lg: 'text-lg'
		}
	}
})

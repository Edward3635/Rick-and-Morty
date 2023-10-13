import { z } from 'zod';

const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
const emailRegExp = /^[A-Za-z0-9._%+-]+@[^.]+\..+$/;


export const signUpSchema = z.object({
	email: z.string().refine((value) => emailRegExp.test(value), {
		message: "Email is required and must be in the format 'something@domain.com'",
	}),
	name: z.string().min(1, { message: "Name is required!" }),
	number: z.string().regex(phoneRegexp, { message: "Incorrect number!" }),
}).refine(
	(data) => data.name && data.email && data.number,
	{
		message: 'You have to fill in inputs correct!',
		path: ['name'],
	}
);

export type TSignUpSchema = z.infer<typeof signUpSchema>;
'use client'
import SiteFooter from '@/components/layouts/SiteFooter';
import SiteHeader from '@/components/layouts/SiteHeader';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TSignUpSchema, signUpSchema } from '@/components/common/Validator';
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import MaskedInput from "react-input-mask";


export default function FormWithReactHookFormAndZodAndServer() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		setError,
	} = useForm<TSignUpSchema>({
		resolver: zodResolver(signUpSchema),
	});

	const onSubmit = async (data: TSignUpSchema) => {
		const response = await fetch('/api/signup', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const responseData = await response.json();
		if (!response.ok) {
			alert('Submitting form failed!');
			return;
		}

		if (responseData.errors) {
			const errors = responseData.errors;

			if (errors.email) {
				setError('email', {
					type: 'server',
					message: errors.email,
				});
			} else if (errors.name) {
				setError('name', {
					type: 'server',
					message: errors.name,
				});
			} else if (errors.number) {
				setError('number', {
					type: 'server',
					message: errors.number,
				});
			} else {
				alert('Oops!');
			}
		}

		reset();
	};
	const [isChecked, setIsChecked] = useState('off');

	return (
		<div className="flex flex-col h-screen justify-between">
			<SiteHeader />
			<div className="bg-white rounded-lg max-w-[500px] mx-auto mb-12">
				<div className="text-center mt-4 text-blue-500">
					<p className="text-2xl font-bold">
						Заповніть форму і ми Вам зателефонуємо!
					</p>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto mb-8 mt-4 p-4 shadow-md">
					{errors.email && (
						<p className="text-red-500 mt-2">{errors.email.message}</p>
					)}
					<input
						{...register('email')}
						type="email"
						placeholder="Email"
						className={`w-full px-4 py-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-500
						${errors.name && "border-red-500"
							} rounded appearance-none focus:outline-none focus:shadow-outline`}
					/>

					{errors.name && (
						<p className="text-red-500 mt-2">{errors.name.message}</p>
					)}
					<input
						{...register('name')}
						type="text"
						placeholder="Name"
						className={`w-full px-4 py-3 mb-4 border rounded focus:outline-none focus:ring focus:border-blue-500
						${errors.name && "border-red-500"} rounded appearance-none focus:outline-none focus:shadow-outline`}
					/>


					{errors.number && (
						<p className="text-red-500 mt-2">{errors.number.message}</p>
					)}

					<MaskedInput
						className={`w-full px-4 py-3 mb-8 border rounded focus:outline-none focus:ring focus:border-blue-500 ${errors.name && "border-red-500"
							} rounded appearance-none focus:outline-none focus:shadow-outline`}
						mask="+380999999999"
						placeholder="+38(0XX)-XXX-XX-XX"
						id="number "
						{...register("number")} />
					<div className="mb-8">
						<RadioGroup defaultValue="complaint" className="flex gap-2 justify-evenly">
							<RadioGroupItem value="complaint" id="r1" label="Сomplaint" />
							<RadioGroupItem value="gratitude" id="r2" label="Gratitude" />
							<RadioGroupItem value="question" id="r3" label="Question" />
						</RadioGroup>
					</div>
					<div className="flex items-center space-x-2 mb-4">

						<Checkbox id="terms" />
						<label htmlFor="terms" className="leading-none peer-disabled:cursor-not-allowed peer-disabled:text-disabled">
							Confirm receiving email messages
						</label>
					</div>


					<button
						disabled={isSubmitting}
						type="submit"
						className="w-full py-2 bg-blue-500 disabled:bg-gray-500 rounded text-white hover:bg-red-600"
					>
						Submit
					</button>
				</form>
			</div>
			<SiteFooter />
		</div>
	);
}

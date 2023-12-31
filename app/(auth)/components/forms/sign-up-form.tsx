'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { useSignUp } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { catchClerkError } from '@/lib/utils'
import { signupSchema } from '@/lib/validations/auth'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/icons'
import { PasswordInput } from '@/components/password-input'
import { toast } from 'sonner'

type Inputs = z.infer<typeof signupSchema>

export function SignUpForm() {
	const router = useRouter()
	const { isLoaded, signUp } = useSignUp()
	const [isPending, startTransition] = React.useTransition()

	// react-hook-form
	const form = useForm<Inputs>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			email: '',
			password: '',
			fullname: '',
		},
	})

	function onSubmit(data: Inputs) {
		if (!isLoaded) return

		startTransition(async () => {
			try {
				await signUp.create({
					emailAddress: data.email,
					password: data.password,
					firstName: data.fullname.split(' ')[0] ?? '',
					lastName: data.fullname.split(' ')[1] ?? '',
				})

				// Send email verification code
				await signUp.prepareEmailAddressVerification({
					strategy: 'email_code',
				})

				router.push('/sign-up/verify-email')
				toast.message('Check your email', {
					description: 'We sent you a 6-digit verification code.',
				})
			} catch (err) {
				catchClerkError(err)
			}
		})
	}

	return (
		<Form {...form}>
			<form
				className="space-y-2"
				onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									autoComplete="email"
									placeholder="rodneymullen180@gmail.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="fullname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full name</FormLabel>
							<FormControl>
								<Input
									autoComplete="given-name"
									placeholder="Rodney Mullen"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<PasswordInput
									placeholder="**********"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					disabled={isPending}
					className="w-full"
					type="submit"
				>
					{isPending && (
						<Icons.spinner
							className="mr-2 h-4 w-4 animate-spin"
							aria-hidden="true"
						/>
					)}
					Continue
					<span className="sr-only">Continue to email verification page</span>
				</Button>
			</form>
		</Form>
	)
}

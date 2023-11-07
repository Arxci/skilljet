import { type Metadata } from 'next'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { ResetPasswordStep2Form } from './components/forms/reset-password-step-2-form'
import { Shell } from '@/components/shells/shell'

export const metadata: Metadata = {
	title: 'Reset Password',
	description: 'Enter your email to reset your password',
}

export default function ResetPasswordStep2Page() {
	return (
		<Shell className="max-w-xl">
			<Card className="border-none shadow-none">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl">Reset password</CardTitle>
					<CardDescription>
						Enter your email address and we will send you a verification code
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ResetPasswordStep2Form />
				</CardContent>
			</Card>
		</Shell>
	)
}
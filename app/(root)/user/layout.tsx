import { Metadata } from 'next'

import { Separator } from '@/components/ui/separator'
import { SidebarNav } from './components/layout/sidebar-nav'
import { MobileNav } from './components/layout/mobile-nav'

export const metadata: Metadata = {
	title: 'Forms',
	description: 'Advanced form example using react-hook-form and Zod.',
}

const sidebarNavItems = [
	{
		title: 'Profile',
		href: '/user',
	},
	{
		title: 'Settings',
		href: '/user/settings',
	},
]

export default function SettingsLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="space-y-6 py-10 pb-16 container">
			<div className="space-y-0.5">
				<h2 className="text-2xl font-bold tracking-tight">Settings</h2>
				<p className="text-muted-foreground">Manage your account settings.</p>
			</div>
			<Separator className="my-6" />
			<div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
				<aside className=" lg:w-1/5">
					<MobileNav items={sidebarNavItems} />
					<SidebarNav items={sidebarNavItems} />
				</aside>
				<div className="flex-1 lg:max-w-2xl">{children}</div>
			</div>
		</div>
	)
}

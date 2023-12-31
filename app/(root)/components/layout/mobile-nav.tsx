'use client'

import * as React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'

import { Icons } from '@/components/icons'

export function MobileNav() {
	const segment = useSelectedLayoutSegment()
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<Sheet
			open={isOpen}
			onOpenChange={setIsOpen}
		>
			<SheetTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="rounded-full mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 w-6 focus-visible:ring-offset-0 lg:hidden"
				>
					<div
						className="space-y-1 flex flex-col"
						aria-hidden="true"
					>
						<span className="bg-foreground rounded-full w-6 h-[2px] " />
						<span className="bg-foreground rounded-full w-6 h-[2px] " />
						<span className="bg-foreground rounded-full w-6 h-[2px]  " />
					</div>
					<span className="sr-only">Toggle Menu</span>
				</Button>
			</SheetTrigger>

			<SheetContent
				side="left"
				className="flex w-full gap-0 py-0 flex-col px-0 sm:max-w-lg"
			>
				<SheetHeader className="items-center h-14 flex w-full flex-row px-4 justify-between">
					<SheetTitle>
						<Link
							href="/"
							className="flex items-center focus-custom rounded-md"
							onClick={() => setIsOpen(false)}
						>
							<Icons.logo
								className="mr-2 h-6 w-6"
								aria-hidden="true"
							/>
							<span className="font-bold text-md">{siteConfig.name}</span>
						</Link>
					</SheetTitle>

					<SheetClose />
				</SheetHeader>

				<ScrollArea className=" h-[calc(100vh-8rem)] pb-10 ">
					<div className="px-4">
						<Accordion
							type="multiple"
							className="w-full"
						>
							<AccordionItem value={'Home'}>
								<AccordionTrigger className="text-sm capitalize">
									Home
								</AccordionTrigger>
								<AccordionContent>
									<div className="flex flex-col space-y-2">
										<MobileLink
											href="#"
											segment={String(segment)}
											setIsOpen={setIsOpen}
										>
											Work in progress
										</MobileLink>
										<MobileLink
											href="#"
											segment={String(segment)}
											setIsOpen={setIsOpen}
										>
											Work in progress
										</MobileLink>
										<MobileLink
											href="#"
											segment={String(segment)}
											setIsOpen={setIsOpen}
										>
											Work in progress
										</MobileLink>
									</div>
								</AccordionContent>
							</AccordionItem>
							{siteConfig.navLinks.map((item, index) => (
								<AccordionItem
									value={item.title}
									key={index}
								>
									<AccordionTrigger className="text-sm capitalize">
										{item.title}
									</AccordionTrigger>
									<AccordionContent>
										<div className="flex flex-col space-y-2">
											{item.items?.map((subItem, index) => (
												<MobileLink
													key={index}
													href={String(subItem.href)}
													segment={String(segment)}
													setIsOpen={setIsOpen}
												>
													{subItem.title}
												</MobileLink>
											))}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	)
}

interface MobileLinkProps extends React.PropsWithChildren {
	href: string
	segment: string
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileLink({ children, href, segment, setIsOpen }: MobileLinkProps) {
	return (
		<Link
			href={href}
			className={cn(
				'text-foreground/70 focus-custom transition-colors hover:text-foreground',
				href.includes(segment) && 'text-foreground'
			)}
			onClick={() => setIsOpen(false)}
		>
			{children}
		</Link>
	)
}

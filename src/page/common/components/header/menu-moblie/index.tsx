import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/page/common/components/shadcn/ui/accordion'

import { Separator } from '@/page/common/components/shadcn/ui/separator'
import Link from 'next/link'

export function MenuMobile() {
	return (
		<>
			<h2>Main Page</h2>

			<div className="flex py-4 px-4 flex-col">
				<h3 className="text-lg">Menu</h3>

				<Separator className="mt-2" />

				<Accordion type="single" collapsible className="w-full py-4">
					<AccordionItem value="item-1">
						<AccordionTrigger className="text-gray-500 rounded-sm hover:text-white">
							Getting started
						</AccordionTrigger>
						<AccordionContent>
							<ul className="grid">
								<Link
									href="/mfas"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									mfas
								</Link>
								<Link
									href="/"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									Introduction
								</Link>
								<Link
									href="/"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									Installation
								</Link>
								<Link
									href="/"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									Typography
								</Link>
							</ul>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className="text-gray-500 rounded-sm hover:text-white">
							Components
						</AccordionTrigger>
						<AccordionContent>
							<ul className="grid">
								<Link
									href="/"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									Alert Dialog
								</Link>
								<Link
									href="/"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									Hover Card
								</Link>
								<Link
									href="/"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									Progress
								</Link>
								<Link
									href="/"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									Scroll-area
								</Link>
								<Link
									href="/"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									Tabs
								</Link>
								<Link
									href="/"
									className="text-gray-500 rounded-sm p-2 hover:text-white hover:bg-muted">
									Tooltip
								</Link>
							</ul>
						</AccordionContent>
					</AccordionItem>

					<ul className="text-gray-500 rounded-sm py-4 hover:text-white">
						<Link href="/" className="font-bold hover:underline ">
							Documentation
						</Link>
					</ul>
				</Accordion>
			</div>
		</>
	)
}

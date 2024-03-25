import { LinkRoute } from '@common/components/LinkRoute'
import { Icons } from '@shadcn/icons'

export function Footer() {
	return (
		<>
			<div className="pb-40"></div>
			<footer className="fixed bottom-0 pt-4 pb-2 w-full text-gray-500 bg-background border-t">
				<div className="container mx-auto flex items-center justify-between">
					<div className="flex items-center space-x-1">
						<p>🌞 Made by shuu11</p>
						<div className="flex items-center space-x-1">
							<LinkRoute href="https://create.t3.gg/" className="flex items-center gap-1">
								<p>T3 Stack</p>
								<Icons.externalLink size={12} />
							</LinkRoute>
						</div>
					</div>
					<LinkRoute href="https://twitter.com/">
						<Icons.twitter size={18} />
					</LinkRoute>
				</div>

				<div className="py-2 pr-10">
					<p className="text-right">@2024 All rights reserved by website.</p>
				</div>
			</footer>
		</>
	)
}

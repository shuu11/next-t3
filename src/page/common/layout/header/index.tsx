import { Logo } from '@common/components/header/logo'

import { Menu } from '@common/components/header/menu'

import { Icons } from '@common/components/header/icons'
import { IconsMobile } from '@common/components/header/icons-mobile'

export function Header() {
	return (
		<header className="sticky top-0 z-40 w-full px-8 py-4 border-b bg-background">
			<div className="container mx-auto flex items-center justify-between pl-4 pr-4 md:pl-0 md:pr-0">
				<Logo />

				<Menu className="hidden lg:block" />

				<div>
					<Icons className="hidden lg:flex lg:items-center lg:justify-center lg:gap-6" />
					<IconsMobile className="flex items-center justify-center gap-6 lg:hidden" />
				</div>
			</div>
		</header>
	)
}

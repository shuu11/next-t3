import { Sheet, SheetContent, SheetTrigger } from '@/page/common/components/shadcn/ui/sheet'

import { Login } from '@/page/common/components/header/icons-mobile/login'
import { Icon } from '@/page/common/components/header/icons-mobile/icon'
import { DarkMode } from '@/page/common/components/header/icons-mobile/dark-mode'
import { Hamburger } from '@/page/common/components/header/icons-mobile/hamburger'

import { MenuMobile } from '@/page/common/components/header/menu-moblie'

type Props = {
	className?: string
}

export function IconsMobile(props: Props) {
	const { className } = props

	return (
		<nav className={className}>
			<Login />
			<Icon />
			<DarkMode />

			<Sheet>
				<SheetTrigger>
					<Hamburger />
				</SheetTrigger>

				<SheetContent side="right" className="w-[240px]">
					<MenuMobile />
				</SheetContent>
			</Sheet>
		</nav>
	)
}

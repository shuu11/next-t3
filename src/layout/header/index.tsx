import { Logo } from '@/layout/header/logo'
import { Login } from '@/layout/header/login'
import { Icon } from '@/layout/header/icon'
import { DarkMode } from '@/layout/header/dark-mode'

export function Header() {
	return (
		<header className="sticky top-0 z-40 w-full py-4 duration-300">
			<div className="container mx-auto flex items-center justify-between pl-4 pr-4 md:pl-0 md:pr-0">
				<Logo />

				<div className="flex items-center gap-6">
					<Login />
					<Icon />
					<DarkMode />
				</div>
			</div>
		</header>
	)
}

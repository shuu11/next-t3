import { Login } from '@common/components/header/icons/login'
import { Icon } from '@common/components/header/icons/icon'
import { DarkMode } from '@common/components/header/icons/dark-mode'

type Props = {
	className?: string
}

export function Icons(props: Props) {
	const { className } = props

	return (
		<nav className={className}>
			<Login />
			<Icon />
			<DarkMode />
		</nav>
	)
}

import Link from 'next/link'
import { Icons } from '@shadcn/icons'

export function Icon() {
	return (
		<Link href="https://github.com">
			<Icons.github className="h-6 w-6" />
		</Link>
	)
}

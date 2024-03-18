import Link from 'next/link'

type Props = {
	href: string
	className?: string
	children: React.ReactNode
}

export function LinkRoute(props: Props) {
	const { href, className, children } = props

	return (
		<Link href={href}>
			<div
				className={`p-2 cursor-pointer hover:text-gray-300 duration-200 transition-all rounded-md flex items-center ${className}`}>
				{children}
			</div>
		</Link>
	)
}

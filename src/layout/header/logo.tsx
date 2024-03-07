import Link from 'next/link'
import { AvatarDemo } from '@/components/shadcn/template/avatar'

export function Logo() {
	return (
		<Link href="/">
			<div className="flex gap-2 cursor-pointer items-center transition-all hover:text-gray-300">
				<AvatarDemo />
				<h1 className="text-xl">map-viewer</h1>
			</div>
		</Link>
	)
}

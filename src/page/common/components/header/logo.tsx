import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/page/common/components/shadcn/ui/avatar'

export function Logo() {
	return (
		<Link href="/">
			<div className="flex gap-2 cursor-pointer items-center transition-all hover:text-gray-300">
				<Avatar className="h-8 w-8">
					<AvatarImage src="/icon/icon.png" alt="icon" />
					<AvatarFallback>...</AvatarFallback>
				</Avatar>
				<h1 className="hidden sm:block sm:text-xl">mfas</h1>
			</div>
		</Link>
	)
}

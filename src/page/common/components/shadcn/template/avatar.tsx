import { Avatar, AvatarFallback, AvatarImage } from '@/page/common/components/shadcn/ui/avatar'

export function AvatarDemo() {
	return (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	)
}

import { unstable_noStore as noStore } from 'next/cache'
import Link from 'next/link'
import { Button } from '@/page/common/components/shadcn/ui/button'
import { getServerAuthSession } from '@/server/auth'

export async function Login() {
	noStore()
	const session = await getServerAuthSession()

	if (session) {
		return (
			<Button variant={'secondary'} asChild>
				<Link href="/api/auth/signout">sign out "{session.user?.name}"</Link>
			</Button>
		)
	} else {
		return (
			<Button asChild>
				<Link href="/api/auth/signin">sign in</Link>
			</Button>
		)
	}
}

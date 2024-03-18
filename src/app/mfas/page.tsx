import { redirect } from 'next/navigation'
import { getServerAuthSession } from '@/server/auth'

import { Header } from '@/page/common/layout/header'
import { Main } from '@/page/mfas/layout/main'
import { Footer } from '@/page/common/layout/footer'

export default async function Mfas() {
	const session = await getServerAuthSession()

	if (!session) {
		redirect('/api/auth/signin')
	}

	return (
		<>
			<Header />
			<Main />
			<Footer />
		</>
	)
}

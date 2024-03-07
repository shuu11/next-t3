'use client'

import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

type Props = {
	children: React.ReactNode
	session: Session | null
}

export const NextAuthProvider = (props: Props) => {
	const { children, session } = props

	return (
		<SessionProvider session={session} refetchOnWindowFocus={false}>
			{children}
		</SessionProvider>
	)
}

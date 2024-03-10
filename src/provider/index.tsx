import { NextAuthProvider } from '@/provider/nextauth'
import { getServerAuthSession } from '@/server/auth'

import { ThemeProvider } from '@/provider/theme'

import { TRPCProvider } from '@/provider/trpc'

export async function Provider({ children }: { children: React.ReactNode }) {
	const session = await getServerAuthSession()

	return (
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
			<NextAuthProvider session={session}>
				<TRPCProvider>{children}</TRPCProvider>
			</NextAuthProvider>
		</ThemeProvider>
	)
}

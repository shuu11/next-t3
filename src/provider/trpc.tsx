import { TRPCReactProvider } from '@/trpc/react'

export function TRPCProvider({ children }: { children: React.ReactNode }) {
	return <TRPCReactProvider>{children}</TRPCReactProvider>
}

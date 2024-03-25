import { Toaster } from '@shadcn/ui/sonner'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import { TailwindIndicator } from '@common/components/tailwind-indicator'

export function Global() {
	return (
		<>
			<Toaster />
			<SpeedInsights />
			<Analytics />
			<TailwindIndicator />
		</>
	)
}

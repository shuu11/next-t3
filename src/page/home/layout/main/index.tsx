import { RocketIcon, Star } from 'lucide-react'

import { MotionUpper } from '@/page/common/components/framer-motion/upper'
import { LinkRoute } from '@/page/common/components/LinkRoute'

export function Main() {
	return (
		<main className="flex flex-col items-center justify-center pt-20 pb-20">
			<MotionUpper>
				<h1 className="text-3xl md:text-6xl mb-2 md:mb-5">Map File to Address Searcher</h1>
			</MotionUpper>

			<MotionUpper delay={0.2}>
				<h3 className="text-2xl mb-6 text-gray-400">Renesas Electronics RL78 Series</h3>
			</MotionUpper>

			<MotionUpper delay={0.4}>
				<div className="flex">
					<LinkRoute href="/mfas">
						<RocketIcon size={12} className="mr-2" />
						Getting Started
					</LinkRoute>

					<LinkRoute href="https://github.com/">
						<Star size={12} className="mr-2" />
						Star on GitHub
					</LinkRoute>
				</div>
			</MotionUpper>
		</main>
	)
}

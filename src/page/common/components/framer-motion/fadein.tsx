'use client'

import { motion } from 'framer-motion'

type Props = {
	routerKey?: string
	children: React.ReactNode
}

export function MotionFadein(props: Props) {
	const { routerKey, children } = props

	const arg = {
		key: routerKey,
		initial: 'initial',
		animate: 'animate',
		variants: {
			initial: {
				opacity: 0,
			},
			animate: {
				opacity: 1,
			},
		},
	}

	return <motion.div {...arg}>{children}</motion.div>
}

'use client'

import { motion } from 'framer-motion'

type Props = {
	delay?: number
	children: React.ReactNode
}

export function MotionUpper(props: Props) {
	const { delay = 0.1, children } = props

	const arg = {
		initial: { y: 10, opacity: 0 },
		animate: { y: 0, opacity: 0.9 },
		transition: {
			duration: 0.5,
			delay: delay,
		},
	}

	return <motion.div {...arg}>{children}</motion.div>
}

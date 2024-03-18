'use client'

import { Ring } from '@uiball/loaders'

type Props = {
	className?: string
}

export function Loader(props: Props) {
	const { className } = props

	return (
		<div className={`${className}`}>
			<Ring size={22} speed={2} color="white" lineWeight={5} />
		</div>
	)
}

'use client'

import { useAtom } from 'jotai'
import { filterState } from '@/global/state'

import { Input } from '@common/components/shadcn/ui/input'
import { Label } from '@common/components/shadcn/ui/label'
import { MotionUpper } from '@common/components/framer-motion/upper'

export function SearchVariable() {
	const [filter, setFilter] = useAtom(filterState)

	return (
		<MotionUpper delay={0.2}>
			<div className="flex flex-col gap-4 w-[30%] mt-20">
				<Label htmlFor="text">search variable</Label>
				<Input
					type="text"
					id="text"
					placeholder="search variable..."
					onChange={(e) => setFilter(e.target.value)}
				/>
			</div>
		</MotionUpper>
	)
}

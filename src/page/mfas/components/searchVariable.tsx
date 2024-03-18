'use client'

import { useRecoilState } from 'recoil'
import { filterState } from '@/state/filter'

import { Input } from '@/page/common/components/shadcn/ui/input'
import { Label } from '@/page/common/components/shadcn/ui/label'
import { MotionUpper } from '@/page/common/components/framer-motion/upper'

export function SearchVariable() {
	const [filter, setFilter] = useRecoilState(filterState)

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
'use client'

import { useState } from 'react'

import { useAtom } from 'jotai'
import { mapdataState, fileState } from '@/global/state'

import { Icons } from '@shadcn/icons'

import { Button } from '@common/components/shadcn/ui/button'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@common/components/shadcn/ui/dropdown-menu'
import { Label } from '@common/components/shadcn/ui/label'

import { MotionUpper } from '@common/components/framer-motion/upper'

type Props = {
	name: string
	size: number
}

export function FilenameArea(props: Props) {
	const { name, size } = props

	const [open, setOpen] = useState(false)

	const [mapdata, setMapdata] = useAtom(mapdataState)
	const [mapfile, setMapfile] = useAtom(fileState)

	const onClick = () => {
		setMapdata([])
		setMapfile({
			name: '',
			size: 0,
			isLoading: false,
		})
	}

	return (
		<MotionUpper>
			<div className="flex flex-col gap-4">
				<Label htmlFor="text">file name</Label>
				<div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
					<p className="text-sm font-medium leading-none">
						<p className="text-2xl">
							{name} - <span className="text-xl">{Math.round(size / 1024)} KB</span>
						</p>
					</p>
					<DropdownMenu open={open} onOpenChange={setOpen}>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="sm">
								<Icons.moreHorizontal />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-[200px]">
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuGroup>
								<DropdownMenuItem className="text-red-600" onClick={onClick}>
									<Icons.trash className="mr-2 h-4 w-4" />
									Delete
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>
		</MotionUpper>
	)
}

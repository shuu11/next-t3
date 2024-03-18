'use client'

import { useState } from 'react'

import { MoreHorizontal, Trash } from 'lucide-react'

import { Button } from '@/page/common/components/shadcn/ui/button'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/page/common/components/shadcn/ui/dropdown-menu'
import { Label } from '@/page/common/components/shadcn/ui/label'
import { useRecoilState } from 'recoil'
import { MapdataState, mapdataState } from '@/state/mapdata'
import { FileState, fileState } from '@/state/file'
import { MotionUpper } from '@/page/common/components/framer-motion/upper'

type Props = {
	name: string
}

export function FilenameArea(props: Props) {
	const { name } = props

	const [open, setOpen] = useState(false)
	const [mapdata, setMapdata] = useRecoilState<MapdataState[]>(mapdataState)
	const [mapfile, setMapfile] = useRecoilState<FileState>(fileState)

	const onClick = () => {
		setMapdata([])
		setMapfile({
			name: '',
			isLoading: false,
		})
	}

	return (
		<MotionUpper>
			<div className="flex flex-col gap-4">
				<Label htmlFor="text">file name</Label>
				<div className="flex w-full flex-col items-start justify-between rounded-md border px-4 py-3 sm:flex-row sm:items-center">
					<p className="text-sm font-medium leading-none">
						<span className="text-2xl">{name}</span>
					</p>
					<DropdownMenu open={open} onOpenChange={setOpen}>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="sm">
								<MoreHorizontal />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end" className="w-[200px]">
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuGroup>
								<DropdownMenuItem className="text-red-600" onClick={onClick}>
									<Trash className="mr-2 h-4 w-4" />
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

'use client'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/page/common/components/shadcn/ui/table'

import { useRecoilState } from 'recoil'

import { filterState } from '@/state/filter'
import { mapdataState } from '@/state/mapdata'
import { type MapdataState } from '@/state/mapdata'
import { fileState } from '@/state/file'
import { type FileState } from '@/state/file'

import { Skeleton } from '@/page/common/components/shadcn/ui/skeleton'
import { MotionUpper } from '@/page/common/components/framer-motion/upper'

export function DataTable() {
	const [filter, setFilter] = useRecoilState(filterState)
	const [mapdata, setMapdata] = useRecoilState<MapdataState[]>(mapdataState)
	const [file, setFile] = useRecoilState<FileState>(fileState)

	const filteredData = mapdata.filter((item) => item.variable.includes(filter))

	return (
		<MotionUpper delay={0.4}>
			<Table className="border mt-20">
				<TableCaption>A list of variable address</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[10%] text-center">Index</TableHead>
						<TableHead className="w-[70%] text-left">Variables</TableHead>
						<TableHead className="w-[20%] text-left">Address</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{file.isLoading ? (
						<TableRow>
							<TableCell>
								<Skeleton className="h-4 w-full" />
							</TableCell>
							<TableCell>
								<Skeleton className="h-4 w-full" />
							</TableCell>
							<TableCell>
								<Skeleton className="h-4 w-full" />
							</TableCell>
						</TableRow>
					) : (
						filteredData.slice(0, 101).map((item, index) => (
							<TableRow key={index}>
								<TableCell className="font-medium text-center">{index}</TableCell>
								<TableCell>{item.variable}</TableCell>
								<TableCell>{item.address}</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</MotionUpper>
	)
}

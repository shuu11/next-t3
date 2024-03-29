'use client'

import { toast } from 'sonner'

import { useRecoilState } from 'recoil'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@common/components/shadcn/ui/table'

import { filterState } from '@/global/state/filter'
import { mapdataState } from '@/global/state/mapdata'
import { type MapdataState } from '@/global/state/mapdata'
import { fileState } from '@/global/state/file'
import { type FileState } from '@/global/state/file'

import { Skeleton } from '@common/components/shadcn/ui/skeleton'
import { MotionUpper } from '@common/components/framer-motion/upper'

import CopyToClipBoard from 'react-copy-to-clipboard'
import { CopyIcon } from 'lucide-react'

export function DataTable() {
	const [filter, setFilter] = useRecoilState(filterState)
	const [mapdata, setMapdata] = useRecoilState<MapdataState[]>(mapdataState)
	const [file, setFile] = useRecoilState<FileState>(fileState)

	const filteredData = mapdata.filter((item) => item.variable.includes(filter))

	return (
		<>
			<MotionUpper delay={0.4}>
				<Table className="border mt-20">
					<TableCaption>A list of variable address</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[10%] text-center">Index</TableHead>
							<TableHead className="w-[40%] text-left">Variables</TableHead>
							<TableHead className="w-[30%] text-left">Address</TableHead>
							<TableHead className="w-[20%] text-left">copy</TableHead>
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
									<TableCell>
										<CopyToClipBoard text={item.address}>
											<span
												onClick={() =>
													toast(`Adress Copy`, {
														description: `Adress : 「${item.address}」 copied!`,
													})
												}
												className="cursor-pointer">
												<CopyIcon className="h-4 w-4" />
											</span>
										</CopyToClipBoard>
									</TableCell>
								</TableRow>
							))
						)}
					</TableBody>
				</Table>
			</MotionUpper>
		</>
	)
}

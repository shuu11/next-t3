'use client'

import { useAtom } from 'jotai'
import { filterState, fileState, mapdataState } from '@/global/state'

import { toast } from 'sonner'

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@common/components/shadcn/ui/table'

import { Skeleton } from '@common/components/shadcn/ui/skeleton'
import { MotionUpper } from '@common/components/framer-motion/upper'

import CopyToClipBoard from 'react-copy-to-clipboard'
import { CopyIcon } from 'lucide-react'

export function DataTable() {
	const [filter, setFilter] = useAtom(filterState)
	const [mapdata, setMapdata] = useAtom(mapdataState)
	const [file, setFile] = useAtom(fileState)

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

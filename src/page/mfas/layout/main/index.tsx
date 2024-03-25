'use client'

import { useRecoilState } from 'recoil'
import { type FileState, fileState } from '@/global/state/file'

import { DataTable } from '@mfas/components/data-table'
import { Dropzone } from '@mfas/components/dropzone'
import { SearchVariable } from '@mfas/components/searchVariable'
import { FilenameArea } from '@mfas/components/filenameArea'

export function Main() {
	const [file, setFile] = useRecoilState<FileState>(fileState)

	return (
		<>
			{file.name ? (
				<main className="container mx-auto w-full max-w-4xl py-20">
					<FilenameArea name={file.name} size={file.size} />
					<SearchVariable />
					<DataTable />
				</main>
			) : (
				<main className="container mx-auto w-full max-w-4xl py-20">
					<Dropzone />
				</main>
			)}
		</>
	)
}

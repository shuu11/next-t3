'use client'

import { FileState, fileState } from '@/state/file'
import { DataTable } from '../../components/data-table'
import { Dropzone } from '../../components/dropzone'
import { SearchVariable } from '../../components/searchVariable'
import { useRecoilState } from 'recoil'
import { FilenameArea } from '../../components/filenameArea'

export function Main() {
	const [file, setFile] = useRecoilState<FileState>(fileState)

	return (
		<>
			{file.name ? (
				<main className="container mx-auto w-full max-w-4xl py-20">
					<FilenameArea name={file.name} />
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

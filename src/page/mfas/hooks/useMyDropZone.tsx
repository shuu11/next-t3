import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { useRecoilState } from 'recoil'

import { mapdataState } from '@/global/state/mapdata'
import { type MapdataState } from '@/global/state/mapdata'

import { fileState } from '@/global/state/file'
import { type FileState } from '@/global/state/file'

import { parseMapFileContent } from '@mfas/lib/parseMapFileContent'

export const useMyDropZone = () => {
	const [mapdata, setMapdata] = useRecoilState<MapdataState[]>(mapdataState)
	const [file, setFile] = useRecoilState<FileState>(fileState)

	const onDrop = useCallback(
		(acceptedFiles: File[]) => {
			if (acceptedFiles.length === 0) {
				return // acceptedFilesが空の場合は処理を中止する
			}

			const acceptedFile = acceptedFiles[0] as File
			const reader = new FileReader()

			reader.onloadstart = () => {
				setFile({
					name: acceptedFile.name,
					size: acceptedFile.size,
					isLoading: true,
				})
			}

			reader.onload = () => {
				const content = reader.result as string

				const onFileUploaded = (content: string) => {
					const data = parseMapFileContent(content)
					setMapdata(data)
				}

				onFileUploaded(content)

				setFile({
					name: acceptedFile.name,
					size: acceptedFile.size,
					isLoading: false,
				})
			}
			reader.readAsText(acceptedFile)
		},
		[setFile, setMapdata],
	)

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		multiple: false,
		accept: {
			'.map': [],
		},
	})

	return { getRootProps, getInputProps, isDragActive }
}

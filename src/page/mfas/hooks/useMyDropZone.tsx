import { useCallback } from 'react'

import { useAtom } from 'jotai'
import { mapdataState, fileState } from '@/global/state'

import { useDropzone } from 'react-dropzone'

import { parseMapFileContent } from '@mfas/lib/parseMapFileContent'

export const useMyDropZone = () => {
	const [mapdata, setMapdata] = useAtom(mapdataState)
	const [file, setFile] = useAtom(fileState)

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

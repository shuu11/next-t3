import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

import { useRecoilState } from 'recoil'

import { mapdataState } from '@/state/mapdata'
import { type MapdataState } from '@/state/mapdata'

import { fileState } from '@/state/file'
import { type FileState } from '@/state/file'

import { parseMapFileContent } from '@/page/mfas/lib/parseMapFileContent'

export const useMyDropZone = () => {
	const [mapdata, setMapdata] = useRecoilState<MapdataState[]>(mapdataState)
	const [file, setFile] = useRecoilState<FileState>(fileState)

	const onFileUploaded = (content: string) => {
		const data = parseMapFileContent(content)
		setMapdata(data)
	}

	const onDrop = useCallback(
		async (acceptedFiles: any) => {
			const acceptedFile = acceptedFiles[0]
			const reader = new FileReader()

			reader.onloadstart = () => {
				setFile({
					name: acceptedFile.name,
					isLoading: true,
				})
			}

			reader.onload = () => {
				const content = reader.result as string
				onFileUploaded(content)

				setFile({
					name: acceptedFile.name,
					isLoading: false,
				})
			}
			reader.readAsText(acceptedFile)
		},
		[onFileUploaded],
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

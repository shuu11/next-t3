'use client'

import { MotionUpper } from '@common/components/framer-motion/upper'
import { useMyDropZone } from '@mfas/hooks/useMyDropZone'

export function Dropzone() {
	const { getRootProps, getInputProps, isDragActive } = useMyDropZone()

	const className = isDragActive ? 'bg-muted' : ''

	return (
		<MotionUpper>
			<div {...getRootProps()}>
				<div className="flex items-center justify-center w-full mt-20">
					<input {...getInputProps()} />
					<label
						className={`flex flex-col items-center justify-center w-full p-10 border-2 border-gray-400 border-dashed rounded-md cursor-pointer hover:bg-muted ${className}`}>
						<div className="flex flex-col items-center justify-center pt-5 pb-6">
							<svg
								className="w-10 h-10 mb-3 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
							</svg>
							<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
								{isDragActive ? (
									<span className="font-semibold">Drop the '.map' file here ...</span>
								) : (
									<span className="font-semibold">
										Drag and drop '.map' file here, or click to select files
									</span>
								)}
							</p>
						</div>
					</label>
				</div>
			</div>
		</MotionUpper>
	)
}

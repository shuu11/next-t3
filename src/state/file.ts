import { atom } from 'recoil'

export type FileState = {
	name: string
	size: number
	isLoading: boolean
}

export const fileState = atom<FileState>({
	key: 'fileState',
	default: {
		name: '',
		size: 0,
		isLoading: false,
	},
})

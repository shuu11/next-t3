import { atom } from 'recoil'

export type FileState = {
	name: string
	isLoading: boolean
}

export const fileState = atom<FileState>({
	key: 'fileState',
	default: {
		name: '',
		isLoading: false,
	},
})

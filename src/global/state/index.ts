import { atom } from 'jotai'


/**
 * file
 */
export const fileState = atom<{
	name: string
	size: number
	isLoading: boolean
}>({
	name: '',
	size: 0,
	isLoading: false,
})

/**
 * filter
 */
export const filterState = atom('')

/**
 * hamburger
 */
export const hamburgerState = atom<{
	isOpen: boolean
}>({
	isOpen: false,
})


/**
 * mapdata
 */
type MapdataState = {
	variable: string
	address: string
}

export const mapdataState = atom<MapdataState[]>([])

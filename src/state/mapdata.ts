import { atom } from 'recoil'

export type MapdataState = {
	variable: string
	address: string
}

export const mapdataState = atom<MapdataState[]>({
	key: 'variableState',
	default: [],
})

import { atom } from 'recoil'

export type HamburgerState = {
	isOpen: boolean
}

export const hamburgerState = atom<HamburgerState>({
	key: 'hamburgerState',
	default: {
		isOpen: false,
	},
})

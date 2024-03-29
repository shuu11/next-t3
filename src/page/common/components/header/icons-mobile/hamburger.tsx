'use client'

import { useAtom } from 'jotai'
import { hamburgerState } from '@/global/state'

import { Spin as HamburgerReact } from 'hamburger-react'

export function Hamburger() {
	const [hamburger, setHamburger] = useAtom(hamburgerState)

	const onToggle = (toggle: boolean) => {
		setHamburger({
			isOpen: toggle ? true : false,
		})
	}

	return <HamburgerReact toggled={hamburger.isOpen} onToggle={onToggle} />
}

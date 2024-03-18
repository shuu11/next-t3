'use client'

import { Spin as HamburgerReact } from 'hamburger-react'

import { useRecoilState } from 'recoil'
import { type HamburgerState } from '@/state/hamburger'
import { hamburgerState } from '@/state/hamburger'

export function Hamburger() {
	const [hamburger, setHamburger] = useRecoilState<HamburgerState>(hamburgerState)

	const onToggle = (toggle: boolean) => {
		setHamburger({
			isOpen: toggle ? true : false,
		})
	}

	return <HamburgerReact toggled={hamburger.isOpen} onToggle={onToggle} />
}

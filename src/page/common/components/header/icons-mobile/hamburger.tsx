'use client'

import { Spin as HamburgerReact } from 'hamburger-react'

import { useRecoilState } from 'recoil'
import { type HamburgerState } from '@/global/state/hamburger'
import { hamburgerState } from '@/global/state/hamburger'

export function Hamburger() {
	const [hamburger, setHamburger] = useRecoilState<HamburgerState>(hamburgerState)

	const onToggle = (toggle: boolean) => {
		setHamburger({
			isOpen: toggle ? true : false,
		})
	}

	return <HamburgerReact toggled={hamburger.isOpen} onToggle={onToggle} />
}

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

export default function Auth() {
	// const router = useRouter()
	const { status } = useSession()

	// useEffect(() => {
	// 	if (status === 'unauthenticated' && router.pathname != '/api/auth/signin') {
	// 		router.push('/')
	// 	}
	// }, [router, status])
		if (status === 'unauthenticated' ) {
			return <p>サインアウトしました</p>
		}
	if (status === 'loading') return <p>Loading...</p>
	if (status === 'authenticated') return <>成功しました</>
}

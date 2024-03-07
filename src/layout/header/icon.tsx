import Link from 'next/link'
import { Github } from 'lucide-react'

export function Icon() {
	return (
		<Link href="https://github.com">
			<Github className="h-6 w-6" fill="white"></Github>
		</Link>
	)
}

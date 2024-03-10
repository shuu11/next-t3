import { redirect} from 'next/navigation'
import { getServerAuthSession } from '@/server/auth'


export default async function Auth() {
	const session = await getServerAuthSession()

		if(session){
			redirect('/')
		}
		else{
			redirect('/')
		}
}

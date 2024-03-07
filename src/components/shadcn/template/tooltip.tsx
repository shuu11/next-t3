import { Button } from '@/components/shadcn/ui/button'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/shadcn/ui/tooltip'

export function TooltipDemo() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<Button variant="outline">Hover</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Add to library</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

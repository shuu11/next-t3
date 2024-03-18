import { cn } from '@/page/common/lib/utils'
import { Slider } from '@/page/common/components/shadcn/ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
	return (
		<Slider
			defaultValue={[50]}
			max={100}
			step={1}
			className={cn('w-[60%]', className)}
			{...props}
		/>
	)
}

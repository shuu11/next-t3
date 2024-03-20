'use client'

import { useState } from 'react'

import { Calendar } from '@/@shadcn/ui/calendar'

export function CalendarDemo() {
	const [date, setDate] = useState<Date | undefined>(new Date())

	return <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
}

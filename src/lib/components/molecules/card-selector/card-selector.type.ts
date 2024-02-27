import type { Card } from "@/lib/utils/cards"

export type CardSelectorProps = {
	card: Card
	minValue: number
	maxValue: number
	className?: string
	onMouseEnter?: () => void
	onMouseLeave?: () => void
}
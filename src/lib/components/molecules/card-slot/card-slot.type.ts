import type { Card } from "@/lib/utils/cards"

export type CardSlotProps = {
	index: number
	card: Card | null
	className?: string
}
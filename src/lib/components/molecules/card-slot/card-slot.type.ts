import type { CardType } from "@/lib/stores/cards"

export type CardSlotProps = {
	index: number
	card: CardType | null
	className?: string
}
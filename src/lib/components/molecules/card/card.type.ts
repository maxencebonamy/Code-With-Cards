import type { CardType } from "@/lib/stores/cards"
import type { CSSProperties } from "react"

export type CardProps = {
	card: CardType
	index?: number
	inHand?: boolean
	className?: string
	style?: CSSProperties
}
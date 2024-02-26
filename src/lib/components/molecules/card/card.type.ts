import type { Card } from "@/lib/utils/cards"
import type { CSSProperties } from "react"

export type CardProps = {
	card: Card
	index?: number
	inHand?: boolean
	className?: string
	style?: CSSProperties
}
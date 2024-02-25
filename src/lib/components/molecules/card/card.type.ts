import type { Color } from "@/lib/utils/colors"
import type { CSSProperties } from "react"

export type CardType = {
	color: Color
	title: string
}

export type CardProps = {
	card: CardType
	index: number
	inHand?: boolean
	className?: string
	style?: CSSProperties
}
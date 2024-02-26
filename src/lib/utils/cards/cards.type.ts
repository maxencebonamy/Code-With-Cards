import type { Color } from "@/lib/utils/colors"
import type { ComponentType, SVGAttributes } from "react"

export type CardTypeProps = {
	color: Color
	title: string
	icon: ComponentType<SVGAttributes<SVGElement>>
}

export enum CardType {
	Forward = "Forward",
	Right = "Right",
	Left = "Left",
	If = "If",
	Else = "Else",
	IfEnd = "IfEnd",
	For = "For",
	While = "While",
	Until = "Until",
	LoopEnd = "LoopEnd"
}

export type Card = CardTypeProps & {
	id: number
}
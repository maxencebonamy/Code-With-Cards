import type { GameState } from "@/lib/stores/game"
import type { Color } from "@/lib/utils/colors"
import type { ComponentType, SVGAttributes } from "react"

type CardTypeActionProps = {
	id: number
	game: GameState
	cards: (Card | null)[]
}

export type CardTypeProps = {
	color: Color
	title: string
	icon: ComponentType<SVGAttributes<SVGElement>>
	type: CardType
	prop: string | number | null
	action: ({ id, game, cards }: CardTypeActionProps) => void
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
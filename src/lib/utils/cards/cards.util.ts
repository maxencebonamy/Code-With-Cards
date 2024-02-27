import { CardType } from "."
import type { Card } from "."
import { ForwardIcon, RightIcon, LeftIcon, IfIcon, ElseIcon, IfEndIcon, RepeatIcon, RepeatEndIcon } from "@/lib/components/atoms/svg"
import type { CardTypeProps } from "./cards.type"

const cardsTypes: Record<CardType, CardTypeProps> = {
	Forward: {
		color: "green",
		title: "Avancer",
		icon: ForwardIcon,
		type: CardType.Forward
	},
	Right: {
		color: "green",
		title: "Tourner à droite",
		icon: RightIcon,
		type: CardType.Right
	},
	Left: {
		color: "green",
		title: "Tourner à gauche",
		icon: LeftIcon,
		type: CardType.Left
	},
	If: {
		color: "blue",
		title: "Si",
		icon: IfIcon,
		type: CardType.If
	},
	Else: {
		color: "blue",
		title: "Sinon",
		icon: ElseIcon,
		type: CardType.Else
	},
	IfEnd: {
		color: "blue",
		title: "Fin Si",
		icon: IfEndIcon,
		type: CardType.IfEnd
	},
	For: {
		color: "red",
		title: "Répéter n fois",
		icon: RepeatIcon,
		type: CardType.For
	},
	While: {
		color: "red",
		title: "Répéter tant que",
		icon: RepeatIcon,
		type: CardType.While
	},
	Until: {
		color: "red",
		title: "Répéter jusqu'à",
		icon: RepeatIcon,
		type: CardType.Until
	},
	LoopEnd: {
		color: "red",
		title: "Fin Répéter",
		icon: RepeatEndIcon,
		type: CardType.LoopEnd
	}
}

export const createCard = (type: CardType, id: number): Card => ({
	id,
	...cardsTypes[type]
})
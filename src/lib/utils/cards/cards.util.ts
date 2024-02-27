import { CardType } from "."
import type { Card } from "."
import { ForwardIcon, RightIcon, LeftIcon, IfIcon, ElseIcon, IfEndIcon, RepeatIcon, RepeatEndIcon } from "@/lib/components/atoms/svg"
import type { CardTypeProps } from "./cards.type"

const cardsTypes: Record<CardType, CardTypeProps> = {
	Forward: {
		color: "green",
		title: "Avancer",
		icon: ForwardIcon,
		type: CardType.Forward,
		prop: null
	},
	Right: {
		color: "green",
		title: "Tourner à droite",
		icon: RightIcon,
		type: CardType.Right,
		prop: null
	},
	Left: {
		color: "green",
		title: "Tourner à gauche",
		icon: LeftIcon,
		type: CardType.Left,
		prop: null
	},
	If: {
		color: "blue",
		title: "Si",
		icon: IfIcon,
		type: CardType.If,
		prop: null
	},
	Else: {
		color: "blue",
		title: "Sinon",
		icon: ElseIcon,
		type: CardType.Else,
		prop: null
	},
	IfEnd: {
		color: "blue",
		title: "Fin Si",
		icon: IfEndIcon,
		type: CardType.IfEnd,
		prop: null
	},
	For: {
		color: "red",
		title: "Répéter <selector> fois",
		icon: RepeatIcon,
		type: CardType.For,
		prop: 1
	},
	While: {
		color: "red",
		title: "Répéter tant que",
		icon: RepeatIcon,
		type: CardType.While,
		prop: null
	},
	Until: {
		color: "red",
		title: "Répéter jusqu'à",
		icon: RepeatIcon,
		type: CardType.Until,
		prop: null
	},
	LoopEnd: {
		color: "red",
		title: "Fin Répéter",
		icon: RepeatEndIcon,
		type: CardType.LoopEnd,
		prop: null
	}
}

export const createCard = (type: CardType, id: number): Card => ({
	id,
	...cardsTypes[type]
})
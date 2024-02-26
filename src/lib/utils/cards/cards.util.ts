import type { Card, CardType } from "."
import { ForwardIcon, RightIcon, LeftIcon, IfIcon, ElseIcon, IfEndIcon, RepeatIcon, RepeatEndIcon } from "@/lib/components/atoms/svg"
import type { CardTypeProps } from "./cards.type"

const cardsTypes: Record<CardType, CardTypeProps> = {
	Forward: {
		color: "green",
		title: "Avancer",
		icon: ForwardIcon
	},
	Right: {
		color: "green",
		title: "Tourner à droite",
		icon: RightIcon
	},
	Left: {
		color: "green",
		title: "Tourner à gauche",
		icon: LeftIcon
	},
	If: {
		color: "blue",
		title: "Si",
		icon: IfIcon
	},
	Else: {
		color: "blue",
		title: "Sinon",
		icon: ElseIcon
	},
	IfEnd: {
		color: "blue",
		title: "Fin Si",
		icon: IfEndIcon
	},
	For: {
		color: "red",
		title: "Répéter n fois",
		icon: RepeatIcon
	},
	While: {
		color: "red",
		title: "Répéter tant que",
		icon: RepeatIcon
	},
	Until: {
		color: "red",
		title: "Répéter jusqu'à",
		icon: RepeatIcon
	},
	LoopEnd: {
		color: "red",
		title: "Fin Répéter",
		icon: RepeatEndIcon
	}
}

export const createCard = (type: CardType, id: number): Card => ({
	id,
	...cardsTypes[type]
})
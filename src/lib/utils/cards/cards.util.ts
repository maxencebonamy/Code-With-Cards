import { CardType } from "."
import type { Card } from "."
import { ForwardIcon, RightIcon, LeftIcon, IfIcon, ElseIcon, IfEndIcon, RepeatIcon, RepeatEndIcon } from "@/lib/components/atoms/svg"
import type { CardTypeProps } from "./cards.type"
import { arrayLast } from "@/lib/utils/array"

const cardsTypes: Record<CardType, CardTypeProps> = {
	Forward: {
		color: "green",
		title: "Avancer",
		icon: ForwardIcon,
		type: CardType.Forward,
		prop: null,
		action: ({ game }) => {
			game.forward()
		}
	},

	Right: {
		color: "green",
		title: "Tourner à droite",
		icon: RightIcon,
		type: CardType.Right,
		prop: null,
		action: ({ game }) => {
			game.right()
		}
	},

	Left: {
		color: "green",
		title: "Tourner à gauche",
		icon: LeftIcon,
		type: CardType.Left,
		prop: null,
		action: ({ game }) => {
			game.left()
		}
	},

	If: {
		color: "blue",
		title: "Si",
		icon: IfIcon,
		type: CardType.If,
		prop: null,
		action: () => {}
	},

	Else: {
		color: "blue",
		title: "Sinon",
		icon: ElseIcon,
		type: CardType.Else,
		prop: null,
		action: () => {}
	},

	IfEnd: {
		color: "blue",
		title: "Fin Si",
		icon: IfEndIcon,
		type: CardType.IfEnd,
		prop: null,
		action: () => {}
	},

	For: {
		color: "red",
		title: "Répéter <selector> fois",
		icon: RepeatIcon,
		type: CardType.For,
		prop: 1,
		action: ({ id, game, cards }) => {
			const card = cards.find(card => card && card.id === id)
			if (!card) return
			const loopIndexes = game.loopIndexes
			loopIndexes.push({
				cardId: card.id,
				loopIndex: 1
			})
		}
	},

	While: {
		color: "red",
		title: "Répéter tant que",
		icon: RepeatIcon,
		type: CardType.While,
		prop: null,
		action: () => {}
	},

	Until: {
		color: "red",
		title: "Répéter jusqu'à",
		icon: RepeatIcon,
		type: CardType.Until,
		prop: null,
		action: () => {}
	},

	LoopEnd: {
		color: "red",
		title: "Fin Répéter",
		icon: RepeatEndIcon,
		type: CardType.LoopEnd,
		prop: null,
		action: ({ game, cards }) => {
			if (game.loopIndexes.length === 0) return

			const lastLoopIndex = arrayLast(game.loopIndexes)
			if (!lastLoopIndex) return

			const loopCardIndex = cards.findIndex(card => card && card.id === lastLoopIndex.cardId)
			const loopCard = cards.find(card => card && card.id === lastLoopIndex.cardId)
			if (!loopCard) return

			if (lastLoopIndex.loopIndex < (loopCard.prop as number)) {
				lastLoopIndex.loopIndex++
				game.setIndex(loopCardIndex + 1)
			} else {
				game.loopIndexes.pop()
			}
		}
	}
}

export const createCard = (type: CardType, id: number): Card => ({
	id,
	...cardsTypes[type]
})
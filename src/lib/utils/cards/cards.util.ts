import { CardType } from "."
import type { Card } from "."
import { ForwardIcon, RightIcon, LeftIcon, IfIcon, ElseIcon, IfEndIcon, RepeatIcon, RepeatEndIcon } from "@/lib/components/atoms/svg"
import type { CardTypeProps } from "./cards.type"
import { arrayLast } from "@/lib/utils/array"
import { hasPathAhead, isOnHazelnut } from "./cards.condition"
import { findElse, findIfEnd, findLoopEnd } from "./cards.block"
import type { GameState } from "@/lib/stores/game"

const conditionalLoop = (id: number, game: GameState, cards: (Card | null)[], shouldLoop: boolean): void => {
	const top = arrayLast(game.loopIndexes)
	const isCurrent = top?.cardId === id

	if (shouldLoop) {
		if (!isCurrent) game.loopIndexes.push({ cardId: id, loopIndex: 1 })
		return
	}

	if (isCurrent) game.loopIndexes.pop()
	const end = findLoopEnd(cards, cards.findIndex(card => card?.id === id))
	game.setIndex(end === -1 ? cards.length : end + 1)
}

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
		title: "Si chemin devant",
		icon: IfIcon,
		type: CardType.If,
		prop: null,
		action: ({ id, game, cards }) => {
			if (hasPathAhead(game)) return

			const index = cards.findIndex(card => card?.id === id)
			const end = findIfEnd(cards, index)
			if (end === -1) {
				game.setIndex(cards.length)
				return
			}

			const elseIndex = findElse(cards, index, end)
			game.setIndex(elseIndex === -1 ? end : elseIndex + 1)
		}
	},

	Else: {
		color: "blue",
		title: "Sinon",
		icon: ElseIcon,
		type: CardType.Else,
		prop: null,
		action: ({ id, game, cards }) => {
			const index = cards.findIndex(card => card?.id === id)
			const end = findIfEnd(cards, index + 1, 1)
			game.setIndex(end === -1 ? cards.length : end)
		}
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
		title: "Tant que chemin devant",
		icon: RepeatIcon,
		type: CardType.While,
		prop: null,
		action: ({ id, game, cards }) => {
			conditionalLoop(id, game, cards, hasPathAhead(game))
		}
	},

	Until: {
		color: "red",
		title: "Jusqu'à la noisette",
		icon: RepeatIcon,
		type: CardType.Until,
		prop: null,
		action: ({ id, game, cards }) => {
			conditionalLoop(id, game, cards, !isOnHazelnut(game))
		}
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

			if (loopCard.type !== CardType.For) {
				game.setIndex(loopCardIndex)
			} else if (lastLoopIndex.loopIndex < (loopCard.prop as number)) {
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
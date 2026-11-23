import { CardType } from "./cards.type"
import type { Card } from "./cards.type"

type Cards = (Card | null)[]

const LOOP_STARTS = [CardType.For, CardType.While, CardType.Until]

export const findLoopEnd = (cards: Cards, start: number): number => {
	let depth = 0
	for (let i = start; i < cards.length; i++) {
		const type = cards[i]?.type
		if (type && LOOP_STARTS.includes(type)) depth++
		if (type === CardType.LoopEnd) {
			depth--
			if (depth === 0) return i
		}
	}
	return -1
}

export const findIfEnd = (cards: Cards, start: number, depth = 0): number => {
	for (let i = start; i < cards.length; i++) {
		const type = cards[i]?.type
		if (type === CardType.If) depth++
		if (type === CardType.IfEnd) {
			depth--
			if (depth === 0) return i
		}
	}
	return -1
}

export const findElse = (cards: Cards, ifIndex: number, endIndex: number): number => {
	let depth = 0
	for (let i = ifIndex + 1; i < endIndex; i++) {
		const type = cards[i]?.type
		if (type === CardType.If) depth++
		if (type === CardType.IfEnd) depth--
		if (type === CardType.Else && depth === 0) return i
	}
	return -1
}
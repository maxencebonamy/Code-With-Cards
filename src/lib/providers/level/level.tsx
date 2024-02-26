"use client"

import { useCardsStore } from "@/lib/stores/cards"
import type { LevelProviderProps } from "."
import { useEffect, type ReactElement } from "react"
import type { Card } from "@/lib/utils/cards"
import { createCard, CardType } from "@/lib/utils/cards"

export const LevelProvider = ({ level, children }: LevelProviderProps): ReactElement => {
	const cards: Card[] = [
		createCard(CardType.Forward, 1),
		createCard(CardType.Right, 2),
		createCard(CardType.Left, 3),
		createCard(CardType.If, 4),
		createCard(CardType.Else, 5),
		createCard(CardType.IfEnd, 6),
		createCard(CardType.For, 7),
		createCard(CardType.While, 8),
		createCard(CardType.Until, 9),
		createCard(CardType.LoopEnd, 10)
	]

	const { setHand, setHeap } = useCardsStore(state => ({
		setHand: state.setHand,
		setHeap: state.setHeap
	}))
	useEffect(() => {
		setHand(cards)
		setHeap(Array<null>(6).fill(null))
	}, [])

	return (
		<>
			{children}
		</>
	)
}
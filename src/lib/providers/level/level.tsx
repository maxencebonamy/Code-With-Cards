"use client"

import { useCardsStore } from "@/lib/stores/cards"
import type { LevelProviderProps } from "."
import { useEffect, type ReactElement } from "react"
import type { Card } from "@/lib/utils/cards"
import { createCard, CardType } from "@/lib/utils/cards"
import { useGameStore } from "@/lib/stores/game"
import { levelsData } from "@/lib/data/levels"

export const LevelProvider = ({ level, children }: LevelProviderProps): ReactElement => {
	const data = levelsData[level]

	const cards: Card[] = data.cards.map((type, index) => createCard(type, index))

	const initGame = useGameStore(state => state.init)
	const { setHand, setHeap } = useCardsStore(state => ({
		setHand: state.setHand,
		setHeap: state.setHeap
	}))

	useEffect(() => {
		initGame(data.board)
		setHand(cards)
		setHeap(Array<null>(cards.length).fill(null))
	}, [])

	return (
		<>
			{children}
		</>
	)
}
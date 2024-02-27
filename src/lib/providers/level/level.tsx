"use client"

import { useCardsStore } from "@/lib/stores/cards"
import type { LevelProviderProps } from "."
import { useEffect, type ReactElement } from "react"
import type { Card } from "@/lib/utils/cards"
import { createCard } from "@/lib/utils/cards"
import { useGameStore } from "@/lib/stores/game"
import { levelsData } from "@/lib/data/levels"
import { VictoryOverlay } from "@/lib/components/organisms/victory-overlay"

export const LevelProvider = ({ level, children }: LevelProviderProps): ReactElement => {
	const data = levelsData[level]

	const cards: Card[] = data.cards.map((type, index) => createCard(type, index))

	const { init, status } = useGameStore(state => ({
		init: state.init,
		status: state.status
	}))
	const { setHand, setHeap } = useCardsStore(state => ({
		setHand: state.setHand,
		setHeap: state.setHeap
	}))

	const onReset = (): void => {
		init(data.board)
		setHand(cards)
		setHeap(Array<null>(cards.length).fill(null))
	}

	useEffect(() => {
		onReset()
	}, [])

	return (
		<>
			{children}
			{ status === "victory" && <VictoryOverlay level={level} onReset={onReset} /> }
		</>
	)
}
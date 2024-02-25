"use client"

import type { CardType } from "@/lib/stores/cards"
import { useCardsStore } from "@/lib/stores/cards"
import type { LevelProviderProps } from "."
import type { ReactElement } from "react"

export const LevelProvider = ({ level, children }: LevelProviderProps): ReactElement => {
	const cards: CardType[] = [
		{ id: 1, color: "red", title: "CONDITION" },
		{ id: 2, color: "green", title: "BOUCLE FOR" },
		{ id: 3, color: "blue", title: "AVANCER" },
		{ id: 4, color: "green", title: "BOUCLE WHILE" },
		{ id: 5, color: "blue", title: "TOURNER" }
	]

	const setHand = useCardsStore(state => state.setHand)
	setHand(cards)

	return (
		<>
			{children}
		</>
	)
}
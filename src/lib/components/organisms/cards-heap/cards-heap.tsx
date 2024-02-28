"use client"

import type { ReactElement } from "react"
import type { CardsHeapProps } from "."
import { CardSlot } from "@/lib/components/molecules/card-slot"
import { CARD_STYLE } from "@/lib/components/molecules/card"
import { CARDS_HEAP_PADDING } from "./cards-heap.util"
import { useCardsStore } from "@/lib/stores/cards"
import { useGameStore } from "@/lib/stores/game"
import { cn } from "@/lib/utils/style"

export const CardsHeap = ({ className }: CardsHeapProps): ReactElement => {
	const { gameIndex, gameStatus } = useGameStore(state => ({
		gameIndex: state.index,
		gameStatus: state.status
	}))

	const style = cn(
		"w-full",
		"flex flex-row items-center justify-center gap-8",
		"shadow-top",
		"overflow-x-clip",
		className ?? ""
	)

	const { cards } = useCardsStore(state => ({ cards: state.heap }))

	const cardStyle = (index: number): string => cn(
		{ "border-4 border-white": gameStatus === "running" && index === gameIndex },
		{ "border-4 border-red": gameStatus === "defeat" && index === gameIndex },
	)

	return (
		<div className={style} style={{ minHeight: CARD_STYLE.height + CARDS_HEAP_PADDING * 2 }}>
			{
				[...Array<undefined>(cards.length)].map((_, index) => (
					<CardSlot
						key={index}
						index={index + 1}
						card={cards[index]}
						className={cardStyle(index)}
					/>
				))
			}
		</div>
	)
}
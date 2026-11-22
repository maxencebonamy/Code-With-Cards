"use client"

import type { ReactElement } from "react"
import type { CardsHeapProps } from "."
import { CardSlot } from "@/lib/components/molecules/card-slot"
import { CARD_STYLE } from "@/lib/components/molecules/card"
import { CARDS_HEAP_GAP, CARDS_HEAP_PADDING } from "./cards-heap.util"
import { useCardsStore } from "@/lib/stores/cards"
import { useGameStore } from "@/lib/stores/game"
import { FitScale } from "@/lib/components/atoms/fit-scale"
import { cn } from "@/lib/utils/style"

export const CardsHeap = ({ className }: CardsHeapProps): ReactElement => {
	const { gameIndex, gameStatus } = useGameStore(state => ({
		gameIndex: state.index,
		gameStatus: state.status
	}))

	const style = cn(
		"w-full",
		"flex flex-row items-center justify-center",
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
		<div className={style} style={{ paddingTop: CARDS_HEAP_PADDING, paddingBottom: CARDS_HEAP_PADDING }}>
			<FitScale
				width={cards.length * CARD_STYLE.width + Math.max(cards.length - 1, 0) * CARDS_HEAP_GAP}
				height={CARD_STYLE.height}
				margin={CARDS_HEAP_PADDING}
			>
				<div className="flex flex-row items-center justify-center gap-8">
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
			</FitScale>
		</div>
	)
}
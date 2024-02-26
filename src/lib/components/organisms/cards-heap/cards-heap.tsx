"use client"

import type { ReactElement } from "react"
import type { CardsHeapProps } from "."
import clsx from "clsx"
import { CardSlot } from "@/lib/components/molecules/card-slot"
import { CARD_STYLE } from "@/lib/components/molecules/card"
import { CARDS_HEAP_PADDING } from "./cards-heap.util"
import { useCardsStore } from "@/lib/stores/cards"

export const CardsHeap = ({ className }: CardsHeapProps): ReactElement => {
	const style = clsx(
		"w-full",
		"flex flex-row items-center justify-center gap-8",
		"shadow-top",
		"overflow-x-clip",
		className ?? ""
	)

	const { cards } = useCardsStore(state => ({ cards: state.heap }))

	return (
		<div className={style} style={{ minHeight: CARD_STYLE.height + CARDS_HEAP_PADDING * 2 }}>
			{
				[...Array<undefined>(cards.length)].map((_, index) => (
					<CardSlot
						key={index}
						index={index + 1}
						card={cards[index]}
					/>
				))
			}
		</div>
	)
}
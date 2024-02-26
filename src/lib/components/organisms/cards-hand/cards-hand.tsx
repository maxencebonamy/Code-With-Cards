"use client"

import type { ReactElement } from "react"
import type { CardsHandProps } from "."
import { CARD_STYLE, Card } from "@/lib/components/molecules/card"
import clsx from "clsx"
import { useCardsStore } from "@/lib/stores/cards"
import { CARDS_HAND_PADDING } from "./cards-hand.util"

export const CardsHand = ({ className }: CardsHandProps): ReactElement => {
	const style = clsx(
		"flex flex-row items-center justify-center",
		"shadow-top",
		className ?? ""
	)

	const { cards } = useCardsStore(state => ({ cards: state.hand }))

	return (
		<div className={style} style={{ minHeight: CARD_STYLE.height + CARDS_HAND_PADDING * 2 }}>
			{cards.map((card, index) => card ? (
				<Card
					key={index}
					card={card}
					className="-ml-4 dhover:ml-4 dhover:mr-14 relative"
					index={cards.length - index}
					inHand
				/>
			) : (
				<div key={index} className="-ml-4" style={CARD_STYLE} />
			))}
		</div>
	)
}
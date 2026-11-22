"use client"

import type { ReactElement } from "react"
import type { CardsHandProps } from "."
import { CARD_STYLE, Card } from "@/lib/components/molecules/card"
import { useCardsStore } from "@/lib/stores/cards"
import { CARDS_HAND_HOVER_SPACE, CARDS_HAND_PADDING } from "./cards-hand.util"
import { FitScale } from "@/lib/components/atoms/fit-scale"
import { cn } from "@/lib/utils/style"

export const CardsHand = ({ className }: CardsHandProps): ReactElement => {
	const style = cn(
		"flex flex-row items-center justify-center",
		"shadow-top",
		"overflow-x-clip",
		className ?? ""
	)

	const { cards } = useCardsStore(state => ({ cards: state.hand }))

	return (
		<div className={style} style={{ paddingTop: CARDS_HAND_PADDING, paddingBottom: CARDS_HAND_PADDING }}>
			<FitScale width={cards.length * (CARD_STYLE.width - 16) + CARDS_HAND_HOVER_SPACE} height={CARD_STYLE.height} margin={CARDS_HAND_PADDING}>
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
			</FitScale>
		</div>
	)
}
import type { ReactElement } from "react"
import type { CardsHandProps } from "."
import { Card } from "@/lib/components/molecules/card"
import clsx from "clsx"

export const CardsHand = ({ cards, className }: CardsHandProps): ReactElement => {
	const style = clsx(
		"flex flex-row items-center justify-center",
		className ?? ""
	)

	const nbCards = cards.length

	return (
		<div className={style}>
			{cards.map((card, index) => (
				<Card key={index} card={card} className="-ml-10 hover:ml-4 hover:mr-14 relative" index={nbCards - index} inHand />
			))}
		</div>
	)
}
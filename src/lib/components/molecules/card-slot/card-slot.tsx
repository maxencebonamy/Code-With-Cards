import type { ReactElement } from "react"
import type { CardSlotProps } from "."
import clsx from "clsx"
import { CARD_STYLE, Card } from "../card"

export const CardSlot = ({ index, card, className }: CardSlotProps): ReactElement => {
	const style = clsx(
		"bg-background shadow-slot",
		"rounded-3xl",
		"flex items-center justify-center",
		className ?? ""
	)

	if (card) {
		return (
			<Card card={card} />
		)
	}

	return (
		<div className={style} style={CARD_STYLE}>
			<p className="font-normal text-9xl text-black opacity-25">
				{index}
			</p>
		</div>
	)
}
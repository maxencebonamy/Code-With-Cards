import type { ReactElement } from "react"
import type { CardSlotProps } from "."
import { CARD_STYLE, Card } from "../card"
import { cn } from "@/lib/utils/style"

export const CardSlot = ({ index, card, className }: CardSlotProps): ReactElement => {
	const style = cn(
		"bg-background shadow-slot",
		"rounded-3xl",
		"flex items-center justify-center",
		"transition-all",
		className ?? ""
	)

	if (card) {
		return (
			<Card card={card} className={className ?? ""} />
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
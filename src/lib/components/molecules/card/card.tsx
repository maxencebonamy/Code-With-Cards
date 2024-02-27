"use client"

import { useState, type ReactElement } from "react"
import { CARD_STYLE, type CardProps } from "."
import clsx from "clsx"
import { formatColor } from "@/lib/utils/colors"
import { randint } from "@/lib/utils/random"
import { useCardsStore } from "@/lib/stores/cards"

export const Card = ({ card, index = 0, inHand = false, className }: CardProps): ReactElement => {
	const [hover, setHover] = useState(false)
	const [rotate, _] = useState(randint(-4, 4))
	const tranferCard = useCardsStore(state => state.tranferCard)

	const style = clsx(
		"shadow-card",
		"rounded-3xl",
		"p-4",
		"flex flex-col items-center justify-center gap-2",
		"cursor-pointer transition-all",
		className ?? ""
	)

	const cssStyle = {
		zIndex: inHand ? index : "auto",
		backgroundColor: formatColor(card.color),
		transform: inHand ? `${hover ? "translateY(-20px)" : `rotate(${rotate}deg)`} ` : "",
		...CARD_STYLE
	}

	const onClick = (): void => {
		if (inHand) {
			tranferCard("hand", "heap", card.id)
			return
		}
		tranferCard("heap", "hand", card.id)
	}

	return (
		<div
			className={style}
			style={cssStyle}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onClick={() => onClick()}
		>
			<card.icon className="w-16 h-16" />
			<p className="text-xl font-semibold text-white text-center uppercase">
				{card.title}
			</p>
		</div>
	)
}
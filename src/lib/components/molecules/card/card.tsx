"use client"

import { useState, type ReactElement } from "react"
import { CARD_STYLE, type CardProps } from "."
import clsx from "clsx"
import { formatColor } from "@/lib/utils/colors"
import { randint } from "@/lib/utils/random"

export const Card = ({ card, index, inHand = false, className }: CardProps): ReactElement => {
	const [hover, setHover] = useState(false)
	const [rotate, _] = useState(randint(-4, 4))

	const style = clsx(
		"shadow-card",
		"rounded-3xl",
		"p-4",
		"flex flex-col items-center justify-center gap-2",
		"cursor-pointer transition-all",
		className ?? ""
	)

	const cssStyle = {
		zIndex: index,
		backgroundColor: formatColor(card.color),
		transform: inHand ? `${hover ? "translateY(-8px)" : `rotate(${rotate}deg)`} ` : "",
		...CARD_STYLE
	}

	return (
		<div
			className={style}
			style={cssStyle}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<p className="text-2xl font-semibold text-white text-center">
				{card.title}
			</p>
		</div>
	)
}
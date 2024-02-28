"use client"

import { useState, type ReactElement } from "react"
import { CARD_STYLE, type CardProps } from "."
import { formatColor } from "@/lib/utils/colors"
import { randint } from "@/lib/utils/random"
import { useCardsStore } from "@/lib/stores/cards"
import { CardSelector } from "@/lib/components/molecules/card-selector"
import { cn } from "@/lib/utils/style"

export const Card = ({ card, index = 0, inHand = false, className }: CardProps): ReactElement => {
	const [hover, setHover] = useState(false)
	const [widgetHover, setWidgetHover] = useState(false)
	const [rotate, _] = useState(randint(-4, 4))
	const tranferCard = useCardsStore(state => state.tranferCard)

	const style = cn(
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
		if (widgetHover) return
		if (inHand) {
			tranferCard("hand", "heap", card.id)
			return
		}
		tranferCard("heap", "hand", card.id)
	}

	let content = (
		<>
			{card.title}
		</>
	)

	if (card.title.includes("<selector>")) {
		const [before, after] = card.title.split("<selector>")
		content = (
			<>
				{before}
				<CardSelector
					card={card}
					minValue={1}
					maxValue={10}
					onMouseEnter={() => setWidgetHover(true)}
					onMouseLeave={() => setWidgetHover(false)}
				/>
				{after}
			</>
		)
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
				{content}
			</p>
		</div>
	)
}
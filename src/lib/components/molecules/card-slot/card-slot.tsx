import type { ReactElement } from "react"
import type { CardSlotProps } from "."
import clsx from "clsx"
import { CARD_STYLE } from "../card"

export const CardSlot = ({ index, className }: CardSlotProps): ReactElement => {
	const style = clsx(
		"bg-background shadow-card-slot",
		"rounded-3xl",
		"flex items-center justify-center",
		className ?? ""
	)

	return (
		<div className={style} style={{ ...CARD_STYLE }}>
			<p className="font-normal text-9xl text-black opacity-25">
				{index}
			</p>
		</div>
	)
}
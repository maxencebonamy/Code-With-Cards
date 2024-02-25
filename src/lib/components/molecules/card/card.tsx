import type { ReactElement } from "react"
import { CARD_STYLE, type CardProps } from "."
import clsx from "clsx"
import { formatColor } from "@/lib/utils/colors"

export const Card = ({ color, title, className }: CardProps): ReactElement => {
	const style = clsx(
		"shadow-card",
		"rounded-3xl",
		"flex flex-col items-center justify-center gap-2",
		"cursor-pointer",
		className ?? ""
	)

	return (
		<div className={style} style={{ backgroundColor: formatColor(color), ...CARD_STYLE }}>
			<p className="text-2xl font-semibold text-white">
				{title}
			</p>
		</div>
	)
}
import type { CSSProperties } from "react"
import { createElement, type ReactElement, type SVGAttributes } from "react"
import type { ItemProps } from "."
import clsx from "clsx"
import { Nut, Squirrel } from "lucide-react"
import { ITEM_STYLE } from "./item.util"
import { formatColor } from "@/lib/utils/colors"

export const Item = ({ type, rotate, className }: ItemProps): ReactElement => {
	const style = clsx(
		"relative",
		"transition-all",
		className ?? ""
	)

	const spanStyle = clsx(
		"w-full h-full absolute left-0",
		"rounded-3xl",
		"transition-all"
	)

	const rotateStyle: CSSProperties = {
		transform: `rotate(${rotate}deg)`
	}

	const color = type === "squirrel" ? "blue" : "green"
	const icon = type === "squirrel" ? Squirrel : Nut

	return (
		<div className={style} style={ITEM_STYLE} >
			<span className={clsx(spanStyle, "bottom-0 z-0 shadow-card")} style={{ background: formatColor(color), ...rotateStyle }} />
			<span className={clsx(spanStyle, "bottom-0 bg-black opacity-20 z-10")} style={rotateStyle} />
			<span
				className={clsx(spanStyle, "bottom-2 z-20 flex items-center justify-center")}
				style={{ background: formatColor(color), ...rotateStyle }}
			>
				{
					createElement(icon, { className: "w-14 h-14 text-white opacity-60" } as SVGAttributes<SVGSVGElement>)
				}
			</span>
		</div>
	)
}
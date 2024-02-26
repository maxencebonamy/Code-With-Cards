import { createElement, type ComponentType, type ImgHTMLAttributes, type ReactElement, type SVGAttributes } from "react"
import type { ItemProps } from "."
import clsx from "clsx"
import type { LucideIcon } from "lucide-react"
import { Nut, Squirrel } from "lucide-react"
import { ITEM_STYLE } from "./item.util"
import { formatColor } from "@/lib/utils/colors"

export const Item = ({ type, className }: ItemProps): ReactElement => {
	const style = clsx(
		"relative",
		className ?? ""
	)

	const spanStyle = clsx(
		"w-full h-full absolute left-0",
		"rounded-3xl"
	)

	const color = type === "squirrel" ? "blue" : "green"
	const icon = type === "squirrel" ? Squirrel : Nut

	return (
		<div className={style} style={ITEM_STYLE} >
			<span className={clsx(spanStyle, "bottom-0 z-0 shadow-card")} style={{ background: formatColor(color) }} />
			<span className={clsx(spanStyle, "bottom-0 bg-black opacity-20 z-10")} />
			<span className={clsx(spanStyle, "bottom-2 z-20 flex items-center justify-center")} style={{ background: formatColor(color) }}>
				{
					createElement(icon, { className: "w-14 h-14 text-white opacity-60" } as SVGAttributes<SVGSVGElement>)
				}
			</span>
		</div>
	)
}
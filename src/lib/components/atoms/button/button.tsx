"use client"

import { useState, type ReactElement } from "react"
import type { ButtonProps } from "."
import { computeColor } from "./button.util"
import { cn } from "@/lib/utils/style"

export const Button = ({ color, className, onClick, children }: ButtonProps): ReactElement => {
	const [hover, setHover] = useState(false)
	const [click, setClick] = useState(false)

	const buttonStyle = cn(
		"px-6 py-1",
		"transition-all",
		"relative",
		click ? "top-1" : "top-0",
		className ?? ""
	)

	const spanStyle = cn(
		"w-full h-full absolute left-0",
		"rounded-2xl transition-all"
	)

	return (
		<button
			className={buttonStyle}
			onClick={onClick}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false)
				setClick(false)
			}}
			onMouseDown={() => setClick(true)}
			onMouseUp={() => setClick(false)}
		>
			<span
				className={cn(spanStyle, "z-0", click ? "bottom-0" : "-bottom-1")}
				style={{ backgroundColor: computeColor(color, hover) }}
			/>

			<span
				className={cn(spanStyle, "z-10 bg-black opacity-25", click ? "bottom-0" : "-bottom-1")}
			/>

			<span
				className={cn(spanStyle, "z-20 bottom-0")}
				style={{ backgroundColor: computeColor(color, hover) }}
			/>

			<p className={cn("relative z-30 text-2xl font-medium uppercase", color === "white" ? "text-black" : "text-white")}>
				{children}
			</p>
		</button>
	)
}
"use client"

import { useState, type ReactElement } from "react"
import type { ButtonProps } from "."
import clsx from "clsx"
import { computeColor } from "./button.util"

export const Button = ({ color, className, onClick, children }: ButtonProps): ReactElement => {
	const [hover, setHover] = useState(false)
	const [click, setClick] = useState(false)

	const buttonStyle = clsx(
		"px-6 py-1",
		"transition-all",
		"relative",
		click ? "top-1" : "top-0",
		className ?? ""
	)

	const spanStyle = clsx(
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
				className={clsx(spanStyle, "z-0 bg-black opacity-25", click ? "bottom-0" : "-bottom-1")}
			/>

			<span
				className={clsx(spanStyle, "z-10 bottom-0")}
				style={{ backgroundColor: computeColor(color, hover) }}
			/>

			<p className="relative z-20 text-2xl text-white font-medium uppercase">
				{children}
			</p>
		</button>
	)
}
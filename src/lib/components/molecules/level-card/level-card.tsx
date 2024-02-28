"use client"

import { useState, type ReactElement } from "react"
import type { LevelCardProps } from "."
import Link from "next/link"
import { CARD_STYLE } from "@/lib/components/molecules/card"
import { computeColor } from "./level-card.util"
import { cn } from "@/lib/utils/style"

export const LevelCard = ({ level, color, className }: LevelCardProps): ReactElement => {
	const [hover, setHover] = useState(false)

	const style = cn(
		"shadow-card",
		"rounded-3xl",
		"p-4",
		"flex flex-col items-center justify-center",
		"cursor-pointer transition-all",
		className ?? ""
	)

	return (
		<Link
			href={`/level/${level}`}
			className={style}
			style={{ background: computeColor(color, hover), ...CARD_STYLE }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			replace={true}
		>
			<p className="font-normal text-9xl text-black opacity-25">
				{level}
			</p>
		</Link>
	)
}
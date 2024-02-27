import type { Color } from "@/lib/utils/colors"
import type { ReactElement } from "react"

export type ButtonProps = {
	color: Color
	className?: string
	onClick?: () => void
	children: string
}
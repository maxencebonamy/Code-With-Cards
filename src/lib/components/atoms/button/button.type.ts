import type { Color } from "@/lib/utils/colors"

export type ButtonProps = {
	color: Color
	className?: string
	onClick?: () => void
	children: string
}
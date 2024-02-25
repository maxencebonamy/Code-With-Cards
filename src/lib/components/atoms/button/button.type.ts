import type { Color } from "@/lib/utils/colors"

export type ButtonProps = {
	name: string
	color: Color
	className?: string
	onClick?: () => void
}
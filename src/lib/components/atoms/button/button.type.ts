export type ButtonColor = "green" | "blue" | "red"

export type ButtonProps = {
	name: string
	color: ButtonColor
	className?: string
	onClick?: () => void
}
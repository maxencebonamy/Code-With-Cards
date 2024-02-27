import type { ReactElement } from "react"
import type { NavbarProps } from "."
import clsx from "clsx"
import { GameButton } from "@/lib/components/molecules/game-button"

export const Navbar = ({ title }: NavbarProps): ReactElement => {
	const style = clsx(
		"bg-background shadow-bottom",
		"sticky z-50 top-0 w-full h-16 p-3",
		"flex flex-row justify-between items-center"
	)

	return (
		<nav className={style}>
			<div className="flex flex-row justify-end items-center w-16">

			</div>

			<h2 className="text-4xl font-medium">
				{title ?? ""}
			</h2>

			<div className="flex flex-row justify-end items-center w-16">
				<GameButton />
			</div>
		</nav>
	)
}
import type { ReactElement } from "react"
import type { NavbarProps } from "."
import clsx from "clsx"
import { Button } from "@/lib/components/atoms/button"

export const Navbar = ({ title }: NavbarProps): ReactElement => {
	const style = clsx(
		"bg-background shadow-frame",
		"w-full h-16 p-3",
		"flex flex-row justify-between items-center"
	)

	return (
		<nav className={style}>
			<div></div>

			<h2 className="text-4xl font-medium">
				{title ?? ""}
			</h2>

			<Button
				color="green"
				name="Démarrer"
			/>
		</nav>
	)
}
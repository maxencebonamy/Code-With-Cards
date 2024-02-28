import type { ReactElement } from "react"
import type { NavbarProps } from "."
import { cn } from "@/lib/utils/style"

export const Navbar = ({ title, leftButton, rightButton }: NavbarProps): ReactElement => {
	const style = cn(
		"bg-background shadow-bottom",
		"sticky z-50 top-0 w-full h-16 p-3",
		"flex flex-row justify-between items-center"
	)

	return (
		<nav className={style}>
			<div className="flex flex-row justify-start items-center w-16">
				{ leftButton ?? <></> }
			</div>

			<h2 className="text-4xl font-medium">
				{title ?? ""}
			</h2>

			<div className="flex flex-row justify-end items-center w-16">
				{ rightButton ?? <></> }
			</div>
		</nav>
	)
}
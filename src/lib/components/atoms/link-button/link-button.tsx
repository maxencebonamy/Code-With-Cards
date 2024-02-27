import type { ReactElement } from "react"
import type { LinkButtonProps } from "."
import Link from "next/link"
import { Button } from "@/lib/components/atoms/button"

export const LinkButton = ({ href, color, className, children }: LinkButtonProps): ReactElement => {
	return (
		<Link href={href}>
			<Button color={color} className={className ?? ""}>{children}</Button>
		</Link>
	)
}
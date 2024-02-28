import type { ReactElement } from "react"
import type { ItemSlotProps } from "."
import { ITEM_STYLE } from "../item/item.util"
import { cn } from "@/lib/utils/style"

export const ItemSlot = ({ className }: ItemSlotProps): ReactElement => {
	const style = cn(
		"bg-background shadow-slot",
		"rounded-3xl",
		className ?? ""
	)

	return (
		<div className={style} style={ITEM_STYLE} />
	)
}
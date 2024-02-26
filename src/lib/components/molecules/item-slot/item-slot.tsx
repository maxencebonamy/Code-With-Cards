import type { ReactElement } from "react"
import type { ItemSlotProps } from "."
import clsx from "clsx"
import { ITEM_STYLE } from "../item/item.util"

export const ItemSlot = ({ className }: ItemSlotProps): ReactElement => {
	const style = clsx(
		"bg-background shadow-slot",
		"rounded-3xl",
		className ?? ""
	)

	return (
		<div className={style} style={ITEM_STYLE} />
	)
}
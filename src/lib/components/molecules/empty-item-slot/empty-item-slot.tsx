import type { ReactElement } from "react"
import type { EmptyItemSlotProps } from "."
import { ITEM_STYLE } from "../item/item.util"

export const EmptyItemSlot = ({ className }: EmptyItemSlotProps): ReactElement => {
	return (
		<div className={className ?? ""} style={ITEM_STYLE} />
	)
}
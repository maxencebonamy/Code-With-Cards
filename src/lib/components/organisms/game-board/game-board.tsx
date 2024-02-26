"use client"

import type { ReactElement } from "react"
import type { GameBoardProps } from "."
import clsx from "clsx"
import { ItemSlot } from "@/lib/components/molecules/item-slot"
import { Item } from "@/lib/components/molecules/item"
import { EmptyItemSlot } from "@/lib/components/molecules/empty-item-slot"
import { useGameStore } from "@/lib/stores/game"

export const GameBoard = ({ className }: GameBoardProps): ReactElement => {
	const { board, squirrel, hazelnut } = useGameStore(state => ({
		board: state.board,
		squirrel: state.squirrel,
		hazelnut: state.hazelnut
	}))

	const style = clsx(
		"flex flex-col items-center justify-center gap-6",
		className ?? ""
	)

	const rowStyle = clsx(
		"flex flex-row items-center justify-center gap-6"
	)

	return (
		<div className={style}>
			{board?.map((row, y) => (
				<div key={y} className={rowStyle}>
					{row.map((tile, x) => {
						if (tile === "empty") {
							return <EmptyItemSlot key={x} />
						}

						if (squirrel?.x === x && squirrel?.y === y) {
							return <Item key={x} type="squirrel" />
						}

						if (hazelnut?.x === x && hazelnut?.y === y) {
							return <Item key={x} type="hazelnut" />
						}

						return <ItemSlot key={x} />
					})}
				</div>
			))}
		</div>
	)
}
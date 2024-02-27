"use client"

import { useEffect, type ReactElement } from "react"
import type { GameBoardProps } from "."
import clsx from "clsx"
import { ItemSlot } from "@/lib/components/molecules/item-slot"
import { Item } from "@/lib/components/molecules/item"
import { EmptyItemSlot } from "@/lib/components/molecules/empty-item-slot"
import { useGameStore } from "@/lib/stores/game"
import { useCardsStore } from "@/lib/stores/cards"

export const GameBoard = ({ className }: GameBoardProps): ReactElement => {
	const { board, squirrel, hazelnut, status, index, forward, right, left, step, reset } = useGameStore(state => ({
		board: state.board,
		squirrel: state.squirrel,
		hazelnut: state.hazelnut,
		status: state.status,
		index: state.index,
		forward: state.forward,
		right: state.right,
		left: state.left,
		step: state.step,
		reset: state.reset
	}))

	const cards = useCardsStore(state => state.heap)

	const style = clsx(
		"flex flex-col items-center justify-center gap-6",
		className ?? ""
	)

	const rowStyle = clsx(
		"flex flex-row items-center justify-center gap-6"
	)

	useEffect(() => {
		if (status === "running") {
			const card = cards[index]
			if (!card) {
				reset()
				return
			}

			switch (card.type) {
			case "Forward":
				forward()
				break
			case "Right":
				right()
				break
			case "Left":
				left()
				break
			default:
				break
			}

			const interval = setTimeout(() => {
				step()
			}, 500)

			return () => clearTimeout(interval)
		}
	}, [status, index])

	return (
		<div className={style}>
			{board?.map((row, y) => (
				<div key={y} className={rowStyle}>
					{row.map((tile, x) => {
						if (tile === "empty") {
							return <EmptyItemSlot key={x} />
						}

						if (squirrel?.x === x && squirrel?.y === y) {
							return <Item key={x} type="squirrel" rotate={squirrel.rotation} />
						}

						if (hazelnut?.x === x && hazelnut?.y === y) {
							return <Item key={x} type="hazelnut" rotate={hazelnut?.rotation} />
						}

						return <ItemSlot key={x} />
					})}
				</div>
			))}
		</div>
	)
}
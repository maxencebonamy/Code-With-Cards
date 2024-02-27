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
	const game = useGameStore()
	const cards = useCardsStore(state => state.heap)

	const style = clsx(
		"flex flex-col items-center justify-center gap-6",
		className ?? ""
	)

	useEffect(() => {
		if (game.status !== "running") return

		const card = cards[game.index]
		if (!card) {
			game.reset()
			return
		}

		card.action({ id: card.id, game, cards })
		const interval = setTimeout(() => {
			game.step(cards.length - 1)
		}, 500)

		return () => clearTimeout(interval)
	}, [game.status, game.index])

	return (
		<div className={style}>
			{game.board?.map((row, y) => (
				<div key={y} className="flex flex-row items-center justify-center gap-6">
					{row.map((tile, x) => {
						if (tile === "empty") {
							return <EmptyItemSlot key={x} />
						}

						if (game.squirrel?.x === x && game.squirrel?.y === y) {
							return <Item key={x} type="squirrel" rotate={game.squirrel.rotation} />
						}

						if (game.hazelnut?.x === x && game.hazelnut?.y === y) {
							return <Item key={x} type="hazelnut" rotate={game.hazelnut?.rotation} />
						}

						return <ItemSlot key={x} />
					})}
				</div>
			))}
		</div>
	)
}
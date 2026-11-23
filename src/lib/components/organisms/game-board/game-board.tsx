"use client"

import { useEffect, useRef, useState, type ReactElement } from "react"
import type { GameBoardProps } from "."
import { ItemSlot } from "@/lib/components/molecules/item-slot"
import { Item } from "@/lib/components/molecules/item"
import { EmptyItemSlot } from "@/lib/components/molecules/empty-item-slot"
import { useGameStore } from "@/lib/stores/game"
import { useCardsStore } from "@/lib/stores/cards"
import { isOnHazelnut } from "@/lib/utils/cards/cards.condition"
import { cn } from "@/lib/utils/style"

const TILE_SIZE = 80
const TILE_GAP = 24
const BOARD_MARGIN = 32

export const GameBoard = ({ className }: GameBoardProps): ReactElement => {
	const game = useGameStore()
	const cards = useCardsStore(state => state.heap)

	const containerRef = useRef<HTMLDivElement>(null)
	const [containerWidth, setContainerWidth] = useState<number>(0)

	const nbRows = game.board?.length ?? 0
	const nbColumns = game.board?.[0]?.length ?? 0
	const boardWidth = nbColumns * TILE_SIZE + Math.max(nbColumns - 1, 0) * TILE_GAP
	const boardHeight = nbRows * TILE_SIZE + Math.max(nbRows - 1, 0) * TILE_GAP
	const scale = boardWidth > 0 && containerWidth > 0 ? Math.min(1, (containerWidth - BOARD_MARGIN) / boardWidth) : 1

	const style = cn(
		"w-full flex items-center justify-center",
		className ?? ""
	)

	useEffect(() => {
		const container = containerRef.current
		if (!container) return

		const observer = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width))
		observer.observe(container)

		return () => observer.disconnect()
	}, [])

	useEffect(() => {
		if (game.status !== "running") return

		const card = cards[game.index]
		if (!card) {
			const finished = game.index >= cards.length && cards.every(Boolean)
			if (finished && isOnHazelnut(game)) game.win()
			else game.reset()
			return
		}

		card.action({ id: card.id, game, cards })
		const interval = setTimeout(() => {
			game.step(cards.length - 1)
		}, 500)

		return () => clearTimeout(interval)
	}, [game.status, game.index])

	return (
		<div ref={containerRef} className={style} style={{ height: boardHeight * scale }}>
			<div
				className="flex flex-col items-center justify-center gap-6 shrink-0"
				style={{ width: boardWidth, height: boardHeight, transform: `scale(${scale})`, transformOrigin: "center" }}
			>
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
		</div>
	)
}
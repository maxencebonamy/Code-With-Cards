"use client"

import { useEffect, type ReactElement } from "react"
import type { GameBoardProps } from "."
import clsx from "clsx"
import { ItemSlot } from "@/lib/components/molecules/item-slot"
import { Item } from "@/lib/components/molecules/item"
import { EmptyItemSlot } from "@/lib/components/molecules/empty-item-slot"
import { useGameStore } from "@/lib/stores/game"
import { useCardsStore } from "@/lib/stores/cards"
import { CardType } from "@/lib/utils/cards"

export const GameBoard = ({ className }: GameBoardProps): ReactElement => {
	const { board, squirrel, hazelnut, status, index, loopIndexes, forward, right, left, step, reset, setIndex } = useGameStore(state => ({
		board: state.board,
		squirrel: state.squirrel,
		hazelnut: state.hazelnut,
		status: state.status,
		index: state.index,
		loopIndexes: state.loopIndexes,
		forward: state.forward,
		right: state.right,
		left: state.left,
		step: state.step,
		reset: state.reset,
		setIndex: state.setIndex
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
			case CardType.Forward:
				forward()
				break
			case CardType.Right:
				right()
				break
			case CardType.Left:
				left()
				break
			case CardType.For:
				loopIndexes.push({
					cardId: card.id,
					loopIndex: 1
				})
				break
			case CardType.LoopEnd:
				if (loopIndexes.length === 0) break
				// eslint-disable-next-line no-case-declarations
				const loopCardIndex = cards.findIndex(card => card && card.id === loopIndexes[loopIndexes.length - 1].cardId)
				// eslint-disable-next-line no-case-declarations
				const loopCard = cards.find(card => card && card.id === loopIndexes[loopIndexes.length - 1].cardId)
				if (!loopCard) break
				if (loopIndexes[loopIndexes.length - 1].loopIndex < (loopCard.prop as number)) {
					loopIndexes[loopIndexes.length - 1].loopIndex++
					setIndex(loopCardIndex + 1)
				} else {
					loopIndexes.pop()
				}
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
import type { CardType } from "@/lib/utils/cards"

export type LevelData = {
	level: number,
	difficulty: 1 | 2 | 3,
	board: string[],
	cards: CardType[]
}
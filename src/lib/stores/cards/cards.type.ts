import type { Color } from "@/lib/utils/colors"

export type CardType = {
	id: number
	color: Color
	title: string
}

export type CardsState = {
	hand: CardType[]
	heap: CardType[]
	setHand: (hand: CardType[]) => void
	setHeap: (heap: CardType[]) => void
	tranferCard: (from: "hand" | "heap", to: "hand" | "heap", id: CardType["id"]) => void
}
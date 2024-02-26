import type { Card } from "@/lib/utils/cards"

export type CardsState = {
	hand: (Card | null)[]
	heap: (Card | null)[]

	setHand: (hand: (Card | null)[]) => void
	setHeap: (heap: (Card | null)[]) => void

	tranferCard: (from: "hand" | "heap", to: "hand" | "heap", id: Card["id"]) => void
}
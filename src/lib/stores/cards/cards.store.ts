import { create } from "zustand"
import type { CardsState } from "."

export const useCardsStore = create<CardsState>()(set => ({
	hand: [],
	heap: [],

	setHand: hand => set({ hand: [...hand] }),
	setHeap: heap => set({ heap: [...heap] }),

	tranferCard: (from, to, id) => set(state => {
		if (from === to) return state

		const fromCards = state[from]
		const toCards = state[to]
		const card = fromCards.find(card => card.id === id)

		if (card) {
			const newFromCards = fromCards.filter(card => card.id !== id)
			const newToCards = [...toCards, card]

			return {
				[from]: newFromCards,
				[to]: newToCards
			}
		}

		return state
	})
}))
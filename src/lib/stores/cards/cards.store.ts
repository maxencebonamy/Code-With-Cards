import { create } from "zustand"
import type { CardsState } from "."

export const useCardsStore = create<CardsState>()(set => ({
	hand: [],
	heap: [],

	setHand: hand => set({ hand }),
	setHeap: heap => set({ heap }),

	tranferCard: (from, to, id) => set(state => {
		if (from === to) return state

		const fromCards = state[from]
		const toCards = state[to]
		const card = fromCards.find(element => element && element.id === id)

		if (card) {
			const newFromCards = fromCards.map(element => element && element.id === id ? null : element)

			const nullIndex = toCards.indexOf(null)
			if (nullIndex === -1) return state
			const newToCards = toCards.map((element, index) => index === nullIndex ? card : element)

			return {
				[from]: newFromCards,
				[to]: newToCards
			}
		}

		return state
	})
}))
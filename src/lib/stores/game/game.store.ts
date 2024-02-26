import { create } from "zustand"
import type { GameState, ItemState } from "."

/**
 * Init the game with a level
 * Level is a string array, each string is a row
 * Each character in the string is a tile
 * "s" is the squirrel
 * "h" is the hazelnut
 * "o" is an empty slot
 * " " is a slot
 */

export const useGameStore = create<GameState>()(set => ({
	board: null,
	squirrel: null,
	hazelnut: null,
	victory: false,
	defeat: false,

	init: (level) => {
		const table = level.map(row => row.split(""))
		const squirrel: ItemState = { x: 0, y: 0, rotation: 0 }
		const hazelnut: ItemState = { x: 0, y: 0, rotation: 0 }

		table.forEach((row, y) => {
			row.forEach((tile, x) => {
				if (tile === "s") {
					squirrel.x = x
					squirrel.y = y
				}

				if (tile === "h") {
					hazelnut.x = x
					hazelnut.y = y
				}
			})
		})

		const board = table.map(
			row => row
				.map(tile => tile === "s" || tile === "h" ? "o" : tile)
				.map(tile => tile === "o" ? "slot" : "empty")
		)

		set({
			board,
			squirrel,
			hazelnut,
			victory: false,
			defeat: false
		})
	},

	moveSquirrel: (x, y) => {
		set(state => {
			if (state.victory || state.defeat) return state

			const { squirrel, hazelnut, board, victory } = state

			if (!squirrel || !hazelnut || !board) return state
			if (x < 0 || x >= board[0].length || y < 0 || y >= board.length) return state
			if (board[y][x] === "empty") {
				return {
					...state,
					defeat: true
				}
			}

			const newSquirrel = { ...squirrel, x, y }
			const newVictory = victory || (x === hazelnut.x && y === hazelnut.y)

			return {
				...state,
				victory: newVictory,
				squirrel: newSquirrel
			}
		})
	},

	rotateSquirrel: (rotation) => {
		set(state => {
			if (state.victory || state.defeat) return state

			const { squirrel } = state
			if (!squirrel) return state

			const newSquirrel = { ...squirrel, rotation }

			return {
				...state,
				squirrel: newSquirrel
			}
		})
	}
}))
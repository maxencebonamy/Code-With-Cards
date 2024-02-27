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
	status: "idle",
	index: 0,
	loopIndexes: [],

	init: (level) => {
		const table = level.map(row => row.split(""))
		let squirrel: ItemState = { x: 0, y: 0, rotation: 0, xOrigin: 0, yOrigin: 0 }
		let hazelnut: ItemState = { x: 0, y: 0, rotation: 0, xOrigin: 0, yOrigin: 0 }

		table.forEach((row, y) => {
			row.forEach((tile, x) => {
				if (tile === "s") {
					squirrel = { ...squirrel, x, y, rotation: 0, xOrigin: x, yOrigin: y }
				}
				if (tile === "h") {
					hazelnut = { ...hazelnut, x, y, rotation: 0, xOrigin: x, yOrigin: y }
				}
			})
		})

		const board = table.map(
			row => row
				.map(tile => tile === "s" || tile === "h" ? "o" : tile)
				.map(tile => tile === "o" ? "slot" : "empty")
		)

		set({ board, squirrel, hazelnut, status: "idle", index: 0 })
	},

	forward: () => {
		set(state => {
			const { squirrel, hazelnut, status, board } = state

			if (status !== "running") return state
			if (!squirrel || !hazelnut || !board) return state

			const x = squirrel.x + Math.round(Math.cos(squirrel.rotation * Math.PI / 180))
			const y = squirrel.y + Math.round(Math.sin(squirrel.rotation * Math.PI / 180))
			if (x < 0 || x >= board[0].length || y < 0 || y >= board.length) return { ...state, status: "defeat" }
			if (board[y][x] === "empty") return { ...state, status: "defeat" }

			const newSquirrel = { ...squirrel, x, y }

			return { ...state, squirrel: newSquirrel }
		})
	},

	right: () => {
		set(state => {
			const { squirrel, status } = state

			if (status !== "running") return state
			if (!squirrel) return state

			const newSquirrel = { ...squirrel, rotation: squirrel.rotation + 90 }

			return { ...state, squirrel: newSquirrel }
		})
	},

	left: () => {
		set(state => {
			const { squirrel, status } = state

			if (status !== "running") return state
			if (!squirrel) return state

			const newSquirrel = { ...squirrel, rotation: squirrel.rotation - 90 }

			return { ...state, squirrel: newSquirrel }
		})
	},

	run: () => {
		set(state => {
			if (state.status !== "idle") return state

			return { ...state, status: "running", index: 0, loopIndexes: [] }
		})
	},

	step: (maxIndex) => {
		set(state => {
			const { status, squirrel, hazelnut } = state
			if (status !== "running") return state
			if (!squirrel || !hazelnut) return state

			const newStatus = (state.index === maxIndex && squirrel.x === hazelnut.x && squirrel.y === hazelnut.y) ? "victory" : status

			return { ...state, status: newStatus, index: state.index + 1 }
		})
	},

	reset: () => {
		set(state => {
			const { squirrel } = state
			if (!squirrel) return state
			const newSquirrel = { ...squirrel, x: squirrel.xOrigin, y: squirrel.yOrigin, rotation: 0 }

			return { ...state, squirrel: newSquirrel, status: "idle", index: 0, loopIndexes: [] }
		})
	},

	setIndex: (index) => {
		set({ index })
	}
}))
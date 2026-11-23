import type { GameState } from "@/lib/stores/game"

export const hasPathAhead = (game: GameState): boolean => {
	const { squirrel, board } = game
	if (!squirrel || !board) return false

	const x = squirrel.x + Math.round(Math.cos(squirrel.rotation * Math.PI / 180))
	const y = squirrel.y + Math.round(Math.sin(squirrel.rotation * Math.PI / 180))

	return board[y]?.[x] === "slot"
}

export const isOnHazelnut = (game: GameState): boolean => {
	const { squirrel, hazelnut } = game
	if (!squirrel || !hazelnut) return false

	return squirrel.x === hazelnut.x && squirrel.y === hazelnut.y
}
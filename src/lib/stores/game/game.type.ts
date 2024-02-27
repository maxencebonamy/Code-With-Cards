export type Tile = "slot" | "empty"

export type ItemState = {
	x: number
	y: number
	rotation: number
	xOrigin: number
	yOrigin: number
}

export type GameStatus = "victory" | "defeat" | "running" | "idle"

export type GameState = {
	board: Tile[][] | null
	squirrel: ItemState | null
	hazelnut: ItemState | null
	status: GameStatus
	index: number

	init: (level: string[]) => void
	forward: () => void
	right: () => void
	left: () => void
	run: () => void
	step: () => void
	reset: () => void
}
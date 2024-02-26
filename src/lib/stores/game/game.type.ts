export type Tile = "slot" | "empty"

export type ItemState = {
	x: number
	y: number
	rotation: number
}

export type GameState = {
	board: Tile[][] | null
	squirrel: ItemState | null
	hazelnut: ItemState | null
	victory: boolean
	defeat: boolean

	init: (level: string[]) => void
	moveSquirrel: (x: number, y: number) => void
	rotateSquirrel: (rotation: number) => void
}
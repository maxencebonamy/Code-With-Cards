import level1 from "./1.json"
import level2 from "./2.json"
import type { LevelData } from "./level.type"

export const levelsData: Record<number, LevelData> = {
	1: level1 as LevelData,
	2: level2 as LevelData
}
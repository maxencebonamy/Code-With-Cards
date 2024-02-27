import level1 from "./1.json"
import level2 from "./2.json"
import level3 from "./3.json"
import level4 from "./4.json"
import level5 from "./5.json"
import level6 from "./6.json"
import level7 from "./7.json"
import level8 from "./8.json"
import level9 from "./9.json"
import type { LevelData } from "./level.type"

export const levelsData: Record<number, LevelData> = {
	1: level1 as LevelData,
	2: level2 as LevelData,
	3: level3 as LevelData,
	4: level4 as LevelData,
	5: level5 as LevelData,
	6: level6 as LevelData,
	7: level7 as LevelData,
	8: level8 as LevelData,
	9: level9 as LevelData
}
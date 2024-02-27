import { Navbar } from "@/lib/components/organisms/navbar"
import type { ReactElement } from "react"
import { levelsData } from "@/lib/data/levels"
import { LevelCard } from "@/lib/components/molecules/level-card"
import type { DifficultyRowProps } from "./page.type"
import { LinkButton } from "@/lib/components/atoms/link-button"

const DifficultyRow = ({ difficulty, color }: DifficultyRowProps): ReactElement => {
	return (
		<div className="flex flex-row items-center justify-center gap-8">
			{
				Object.values(levelsData).filter(level => level.difficulty === difficulty).map((level) => (
					<LevelCard level={level.level} color={color} key={level.level} />
				))
			}
		</div>
	)
}

export default (): ReactElement => {
	return (
		<main className="h-full flex flex-col items-center justify-center">
			<Navbar
				title="Choix du niveau"
				leftButton={<LinkButton href="/" color="blue">Accueil</LinkButton>}
			/>

			<div className="h-full w-full flex flex-col items-center justify-center gap-8">
				<DifficultyRow difficulty={1} color="green" />
				<DifficultyRow difficulty={2} color="red" />
				<DifficultyRow difficulty={3} color="blue" />
			</div>
		</main>
	)
}
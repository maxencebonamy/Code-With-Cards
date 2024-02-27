import type { ReactElement } from "react"
import type { PageParams } from "./page.type"
import { Navbar } from "@/lib/components/organisms/navbar"
import config from "@/lib/data/config.json"
import { redirect } from "next/navigation"
import { CardsHand } from "@/lib/components/organisms/cards-hand"
import { CardsHeap } from "@/lib/components/organisms/cards-heap"
import { LevelProvider } from "@/lib/providers/level"
import { GameBoard } from "@/lib/components/organisms/game-board"
import { GameButton } from "@/lib/components/molecules/game-button"
import { LinkButton } from "@/lib/components/atoms/link-button"

export default ({ params }: {params: PageParams}): ReactElement => {
	const levelId = parseInt(params.id)
	if (!levelId || levelId < 1 || levelId > config.nbLevels) {
		redirect("/level")
	}

	return (
		<LevelProvider level={levelId}>
			<main className="h-full flex flex-col items-center justify-between gap-5">
				<Navbar
					title={`Niveau ${params.id}`}
					leftButton={<LinkButton href="/level" color="blue">Retour</LinkButton>}
					rightButton={<GameButton />}
				/>

				<GameBoard className="" />

				<section className="w-full flex flex-col items-center justify-end">
					<CardsHeap className="w-full" />
					<CardsHand className="w-full" />
				</section>
			</main>
		</LevelProvider>
	)
}
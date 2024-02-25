import type { ReactElement } from "react"
import type { PageParams } from "./page.type"
import { Navbar } from "@/lib/components/organisms/navbar"
import config from "@/lib/data/config.json"
import { redirect } from "next/navigation"
import { CardsHand } from "@/lib/components/organisms/cards-hand"
import { CardsHeap } from "@/lib/components/organisms/cards-heap"
import { LevelProvider } from "@/lib/providers/level"

export default ({ params }: {params: PageParams}): ReactElement => {
	const levelId = parseInt(params.id)
	if (!levelId || levelId < 1 || levelId > config.nbLevels) {
		redirect("/level")
	}

	return (
		<LevelProvider level={levelId}>
			<main className="h-full flex flex-col items-center justify-between gap-5">
				<Navbar title={`Niveau ${params.id}`} />

				<section className="w-full flex flex-col items-center justify-end">
					<CardsHeap nbSlots={8} className="w-full" />
					<CardsHand className="w-full" />
				</section>
			</main>
		</LevelProvider>
	)
}
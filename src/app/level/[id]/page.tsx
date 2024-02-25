import type { ReactElement } from "react"
import type { PageParams } from "./page.type"
import { Navbar } from "@/lib/components/organisms/navbar"
import config from "@/lib/data/config.json"
import { redirect } from "next/navigation"
import { CardSlot } from "@/lib/components/molecules/card-slot"
import { CardsHand } from "@/lib/components/organisms/cards-hand"
import type { CardType } from "@/lib/components/molecules/card"

export default ({ params }: {params: PageParams}): ReactElement => {
	const levelId = parseInt(params.id)
	if (!levelId || levelId < 1 || levelId > config.nbLevels) {
		redirect("/level")
	}

	const cards: CardType[] = [
		{ color: "red", title: "CONDITION" },
		{ color: "green", title: "BOUCLE FOR" },
		{ color: "blue", title: "AVANCER" },
		{ color: "green", title: "BOUCLE WHILE" },
		{ color: "blue", title: "TOURNER" }
	]

	return (
		<main className="flex flex-col items-center justify-start gap-5">
			<Navbar title={`Niveau ${params.id}`} />

			<div className="flex flex-row items-center justify-center gap-8 m-8">
				{
					[...Array<undefined>(6)].map((_, index) => (
						<CardSlot
							key={index}
							index={index + 1}
						/>
					))
				}
			</div>

			<CardsHand cards={cards} />
		</main>
	)
}
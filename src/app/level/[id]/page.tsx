import type { ReactElement } from "react"
import type { PageParams } from "./page.type"
import { Navbar } from "@/lib/components/organisms/navbar"
import config from "@/lib/data/config.json"
import { redirect } from "next/navigation"
import { CardSlot } from "@/lib/components/molecules/card-slot"
import { Card } from "@/lib/components/molecules/card"

export default ({ params }: {params: PageParams}): ReactElement => {
	const levelId = parseInt(params.id)
	if (!levelId || levelId < 1 || levelId > config.nbLevels) {
		redirect("/level")
	}

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

			<div className="flex flex-row items-center justify-center gap-8 m-8">
				<Card color="blue" title="Test" />
				<Card color="red" title="Test" />
				<Card color="green" title="Test" />
				<Card color="red" title="Test" />
				<Card color="blue" title="Test" />
				<Card color="green" title="Test" />
			</div>
		</main>
	)
}
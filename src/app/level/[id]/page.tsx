/**
 * Niveau numéro [id]
 */

import type { ReactElement } from "react"
import type { PageParams } from "./page.type"
import { Navbar } from "@/lib/components/organisms/navbar"

export default ({ params }: {params: PageParams}): ReactElement => {
	return (
		<main className="flex flex-col items-center justify-start gap-5">
			<Navbar title={`Niveau ${params.id}`} />
		</main>
	)
}
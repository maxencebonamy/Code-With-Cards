import { Navbar } from "@/lib/components/organisms/navbar"
import type { ReactElement } from "react"

export default (): ReactElement => {
	return (
		<main className="flex flex-col items-center justify-start gap-5">
			<Navbar title="Choix du niveau" />
		</main>
	)
}
import { LinkButton } from "@/lib/components/atoms/link-button"
import type { ReactElement } from "react"

export default (): ReactElement => {
	return (
		<main className="w-screen h-screen flex flex-col items-center justify-center">
			{/* <div className="w-full h-full grid gap-6">
			</div> */}

			<LinkButton href="/level" color="blue">C'est parti !</LinkButton>
		</main>
	)
}
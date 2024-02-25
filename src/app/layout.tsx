import type { Metadata } from "next"
import { Fredoka } from "next/font/google"
import "@/lib/styles/globals.css"
import type { PropsWithChildren, ReactElement } from "react"

const font = Fredoka({
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal"],
	subsets: ["latin"],
	display: "swap"
})

export const metadata: Metadata = {
	title: "Code With Cards",
	description: "Apprends à coder avec des cartes !"
}

export default ({ children }: PropsWithChildren): ReactElement => {
	return (
		<html lang="fr">
			<body className={font.className}>{children}</body>
		</html>
	)
}
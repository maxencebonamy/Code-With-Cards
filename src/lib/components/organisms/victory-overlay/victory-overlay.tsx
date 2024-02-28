import type { ReactElement } from "react"
import type { VictoryOverlayProps } from "."
import config from "@/lib/data/config.json"
import { Button } from "@/lib/components/atoms/button"
import Link from "next/link"
import { cn } from "@/lib/utils/style"

export const VictoryOverlay = ({ level, onReset, className }: VictoryOverlayProps): ReactElement => {
	const nbLevels = config.nbLevels
	const nextLevel = level < nbLevels ? level + 1 : null

	const style = cn(
		"absolute z-50 top-0 left-0 w-full h-full",
		"flex flex-col justify-center items-center gap-8",
		"bg-black bg-opacity-60",
		className ?? ""
	)

	return (
		<span className={style}>
			<h2 className="text-white font-semibold text-8xl uppercase">Victoire !</h2>

			<div className="flex flex-row items-center justify-center gap-8">
				<Button color="green" onClick={onReset}>Recommencer</Button>

				{nextLevel && (
					<Link href={`/level/${level + 1}`}>
						<Button color="blue">Niveau suivant</Button>
					</Link>
				)}
			</div>
		</span>
	)
}
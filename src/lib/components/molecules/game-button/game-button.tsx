"use client"

import type { ReactElement } from "react"
import type { GameButtonProps } from "."
import { Button } from "@/lib/components/atoms/button"
import { useGameStore } from "@/lib/stores/game"

export const GameButton = ({ className }: GameButtonProps): ReactElement => {
	const { status, run, reset } = useGameStore(state => ({
		status: state.status,
		run: state.run,
		reset: state.reset
	}))

	if (status === "running") {
		return (
			<Button className={className ?? ""} color="red" onClick={reset}>
				Arrêter
			</Button>
		)
	}

	if (status === "idle") {
		return (
			<Button className={className ?? ""} color="green" onClick={run}>
				Démarrer
			</Button>
		)
	}

	return (
		<Button className={className ?? ""} color="blue" onClick={reset}>
			Réinitialiser
		</Button>
	)
}
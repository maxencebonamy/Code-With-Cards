import { useState, type ReactElement, useEffect } from "react"
import type { CardSelectorProps } from "."
import { Button } from "../../atoms/button"
import clsx from "clsx"

export const CardSelector = ({ card, minValue, maxValue, className, onMouseEnter, onMouseLeave }: CardSelectorProps): ReactElement => {
	const [value, setValue] = useState<number>(card.prop as number)

	const style = clsx(
		"flex flex-row items-center justify-center gap-3",
		className ?? ""
	)

	const decrement = (): void => {
		if (value > minValue) {
			setValue(value - 1)
		}
	}

	const increment = (): void => {
		if (value < maxValue) {
			setValue(value + 1)
		}
	}

	useEffect(() => {
		card.prop = value
	}, [value])

	return (
		<div className={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<Button color="white" onClick={decrement} className="px-4 py-0">-</Button>
			<p className="text-black">{value}</p>
			<Button color="white" onClick={increment} className="px-4 py-0">+</Button>
		</div>
	)
}
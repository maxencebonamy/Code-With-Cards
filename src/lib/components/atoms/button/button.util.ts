import { darken } from "@/lib/utils/colors/colors.util"
import type { ButtonColor } from "."

const DARKEN_AMOUNT = 10

export const computeColor = (color: ButtonColor, hover: boolean): string => {
	const getColor = (color: ButtonColor): string => {
		switch (color) {
		case "green":
			return "#A5CA7B"
		case "red":
			return "#E66568"
		case "blue":
			return "#98C2D3"
		}
	}

	return darken(getColor(color), hover ? DARKEN_AMOUNT : 0)
}
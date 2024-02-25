import { darken, formatColor, type Color } from "@/lib/utils/colors"

const DARKEN_AMOUNT = 10

export const computeColor = (color: Color, hover: boolean): string => {
	return darken(formatColor(color), hover ? DARKEN_AMOUNT : 0)
}
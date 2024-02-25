const hexToRgb = (color: string): { r: number, g: number, b: number } => {
	const hex = color.replace("#", "")

	const r = parseInt(hex.substring(0, 2), 16)
	const g = parseInt(hex.substring(2, 4), 16)
	const b = parseInt(hex.substring(4, 6), 16)

	return { r, g, b }
}

const rgbToHex = (r: number, g: number, b: number): string => {
	const toHex = (c: number): string => {
		const hex = c.toString(16)
		return hex.length === 1 ? "0" + hex : hex
	}

	return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export const darken = (color: string, amount: number): string => {
	const parsedColor = hexToRgb(color)

	const r = Math.max(parsedColor.r - amount, 0)
	const g = Math.max(parsedColor.g - amount, 0)
	const b = Math.max(parsedColor.b - amount, 0)

	return rgbToHex(r, g, b)
}

export const lighten = (color: string, amount: number): string => {
	const parsedColor = hexToRgb(color)

	const r = Math.min(parsedColor.r + amount, 255)
	const g = Math.min(parsedColor.g + amount, 255)
	const b = Math.min(parsedColor.b + amount, 255)

	return rgbToHex(r, g, b)
}
export const arrayEquals = <T>(a: T[], b: T[]): boolean => {
	if (a.length !== b.length) return false
	for (let i = 0; i < a.length; i++) {
		if (a[i] !== b[i]) return false
	}
	return true
}

export const arrayLast = <T>(arr: T[]): T | undefined => arr[arr.length - 1]
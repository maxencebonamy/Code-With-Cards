/* eslint-disable max-len */

import type { ReactElement } from "react"
import type { SvgProps } from "."

export const RightIcon = ({ className = "" }: SvgProps): ReactElement => {
	return (
		<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M63.5 21V39H45.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M9.5 51C9.5 43.8392 12.3446 36.9716 17.4081 31.9081C22.4716 26.8446 29.3392 24 36.5 24C43.1446 24.0068 49.5534 26.4635 54.5 30.9L63.5 39" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	)
}
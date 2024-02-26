/* eslint-disable max-len */

import type { ReactElement } from "react"
import type { SvgProps } from "."

export const LeftIcon = ({ className = "" }: SvgProps): ReactElement => {
	return (
		<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M9.5 21V39H27.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M63.5 51C63.5 43.8392 60.6554 36.9716 55.5919 31.9081C50.5284 26.8446 43.6608 24 36.5 24C29.8554 24.0068 23.4466 26.4635 18.5 30.9L9.5 39" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	)
}
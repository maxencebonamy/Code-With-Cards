/* eslint-disable max-len */

import type { ReactElement } from "react"
import type { SvgProps } from "."

export const ElseIcon = ({ className = "" }: SvgProps): ReactElement => {
	return (
		<svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M48.5 9.5H63.5V24.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M24.5 9.5H9.5V24.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M24.5 9.5H9.5V24.5" stroke="#98C2D3" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M36.5 66.5V41.6C36.5171 40.0021 36.215 38.4169 35.6112 36.9373C35.0074 35.4578 34.1142 34.1137 32.984 32.984L9.5 9.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M36.5 66.5V41.6C36.5171 40.0021 36.215 38.4169 35.6112 36.9373C35.0074 35.4578 34.1142 34.1137 32.984 32.984L9.5 9.5" stroke="#98C2D3" stroke-opacity="0.6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
			<path d="M45.5 27.5L63.5 9.5" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>

	)
}
/* eslint-disable max-len */

import type { ReactElement } from "react"
import type { SvgProps } from "."

export const IfIcon = ({ className = "" }: SvgProps): ReactElement => {
	return (
		<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M48.5 9H63.5V24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M48.5 9H63.5V24" stroke="#98C2D3" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M24.5 9H9.5V24" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M36.5 66V41.1C36.5171 39.5021 36.215 37.9169 35.6112 36.4373C35.0074 34.9578 34.1142 33.6137 32.984 32.484L9.5 9" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M45.5 27L63.5 9" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M45.5 27L63.5 9" stroke="#98C2D3" strokeOpacity="0.6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
}
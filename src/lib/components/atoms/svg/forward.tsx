/* eslint-disable max-len */

import type { ReactElement } from "react"
import type { SvgProps } from "."

export const ForwardIcon = ({ className = "" }: SvgProps): ReactElement => {
	return (
		<svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M24.5 18.5L36.5 6.5L48.5 18.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M36.5 6.5V66.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
}
/* eslint-disable max-len */

import type { ReactElement } from "react"
import type { SvgProps } from "."

export const RepeatIcon = ({ className = "" }: SvgProps): ReactElement => {
	return (
		<svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
			<path d="M51.5 6.5L63.5 18.5L51.5 30.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M9.5 33.5V30.5C9.5 27.3174 10.7643 24.2652 13.0147 22.0147C15.2652 19.7643 18.3174 18.5 21.5 18.5H63.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M21.5 66.5L9.5 54.5L21.5 42.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			<path d="M63.5 39.5V42.5C63.5 45.6826 62.2357 48.7348 59.9853 50.9853C57.7348 53.2357 54.6826 54.5 51.5 54.5H9.5" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
		</svg>
	)
}
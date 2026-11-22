"use client"

import { useEffect, useRef, useState, type ReactElement } from "react"
import type { FitScaleProps } from "."
import { cn } from "@/lib/utils/style"

/**
 * Scale down its content (of natural size width x height) to fit the available width
 */
export const FitScale = ({ width, height, margin = 0, className, children }: FitScaleProps): ReactElement => {
	const containerRef = useRef<HTMLDivElement>(null)
	const [containerWidth, setContainerWidth] = useState<number>(0)

	const scale = width > 0 && containerWidth > 0 ? Math.min(1, (containerWidth - margin) / width) : 1

	const style = cn(
		"w-full flex items-center justify-center",
		className ?? ""
	)

	useEffect(() => {
		const container = containerRef.current
		if (!container) return

		const observer = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width))
		observer.observe(container)

		return () => observer.disconnect()
	}, [])

	return (
		<div ref={containerRef} className={style} style={{ height: height * scale }}>
			<div
				className="shrink-0 flex flex-row items-center justify-center"
				style={{ width, height, transform: `scale(${scale})`, transformOrigin: "center" }}
			>
				{children}
			</div>
		</div>
	)
}
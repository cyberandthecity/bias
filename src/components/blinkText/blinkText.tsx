import { BackgroundColor } from "@/utils/theme"
import { FunctionComponent, useRef, useState, useEffect } from "react"

interface SimulationProps {
	title: string
	interval: number
}

const BlinkText: FunctionComponent<SimulationProps> = ({ title, interval }) => {
	const ref = useRef<HTMLParagraphElement>(null)
	const dotRef = useRef<number>(0)

	useEffect(() => {
		const thisInterval = setInterval(() => {
			if (ref.current !== null) {
				dotRef.current = (dotRef.current + 1) % 4
				ref.current.innerText = title + ".".repeat(dotRef.current)
			}
		}, interval)
		return () => clearInterval(thisInterval)
	}, [ref, dotRef, interval])

	return (
		<p ref={ref} style={{ fontSize: "42px", fontWeight: 600, color: BackgroundColor }}>
			{title}
		</p>
	)
}

export default BlinkText

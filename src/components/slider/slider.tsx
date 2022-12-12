import { InterfaceColor } from "@/utils/theme"
import { FunctionComponent, useEffect, useRef } from "react"
import { MathUtils } from "three"

interface SliderProps {
	startIndex: number
	onSelection: (index: number) => void
	confirmDataset: () => void
}

const Slider: FunctionComponent<SliderProps> = ({ startIndex, onSelection, confirmDataset }) => {
	const goalPositions = [0, 640 + 65, 1280 + 65 + 65]

	const ref = useRef<HTMLDivElement>(null)

	const startPosition = useRef<number>(0)
	const lastPosition = useRef<number>(0)
	const selectionIndex = useRef<number>(0)
	const dragging = useRef<boolean>(false)

	useEffect(() => {
		selectionIndex.current = startIndex
	}, [startIndex])

	useEffect(() => {
		const interval = setInterval(() => {
			if (!dragging.current && ref.current) {
				const goalPosition = goalPositions[selectionIndex.current]
				lastPosition.current = MathUtils.lerp(lastPosition.current, goalPosition, 0.1)
				ref.current.style.transform = `translateX(${lastPosition.current}px)`
				ref.current.style.webkitTransform = `translateX(${lastPosition.current}px)`
			}
		}, 10)
		return () => clearInterval(interval)
	}, [])

	const updateSelectionIndex = () => {
		if (lastPosition.current <= 320 + 65 / 2 && selectionIndex.current !== 0) {
			selectionIndex.current = 0
			onSelection(selectionIndex.current)
		}

		if (
			lastPosition.current > 320 + 65 / 2 &&
			lastPosition.current <= 960 + 65 + 65 / 2 &&
			selectionIndex.current !== 1
		) {
			selectionIndex.current = 1
			onSelection(selectionIndex.current)
		}

		if (lastPosition.current > 960 + 65 + 65 / 2 && selectionIndex.current !== 2) {
			selectionIndex.current = 2
			onSelection(selectionIndex.current)
		}
	}

	return (
		<div
			ref={ref}
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
			onMouseDown={(e) => {
				e = e || window.event
				e.preventDefault()
				dragging.current = true

				startPosition.current = e.clientX - lastPosition.current
				document.onmousemove = (e) => {
					lastPosition.current = e.clientX - (startPosition.current || 0)
					ref.current!.style.transform = `translateX(${lastPosition.current}px)`
					updateSelectionIndex()
				}

				document.onmouseup = (e) => {
					document.onmouseup = null
					document.onmousemove = null
					dragging.current = false
				}
			}}
		>
			<div
				style={{
					display: "flex",
					width: "640px",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "10px",
					gridGap: "10px",
				}}
			>
				<Bar width={640} />
				<Bar width={550} dots />
				<Bar width={460} />
				<div
					style={{
						background: InterfaceColor,
						height: "45px",
						marginTop: "40px",
						padding: "18px 30px 8px 30px",
						borderRadius: "10px",
						width: "fit-content",
						fontSize: "32px",
						fontWeight: 500,
						color: "white",
						boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
						cursor: "pointer",
					}}
					onClick={confirmDataset}
				>
					Trainieren
				</div>
			</div>
		</div>
	)
}

export default Slider

interface BarProps {
	width: number
	dots?: boolean
}
const Bar: FunctionComponent<BarProps> = ({ width, dots = false }) => {
	return (
		<div
			style={{
				background: InterfaceColor,
				width: `${width}px`,
				height: "45px",
				borderRadius: "20px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				cursor: dots ? "move" : "default",
			}}
		>
			{dots && <img src={"/images/dots.svg"} alt="dots" />}
		</div>
	)
}

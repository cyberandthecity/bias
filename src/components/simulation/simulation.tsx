import { BackgroundColor, InterfaceColor } from "@/utils/theme"
import { FunctionComponent, useEffect, useRef } from "react"
import BlinkText from "../blinkText/blinkText"

import "@/styles/globals.css"
import "@/styles/shining.css"
import SelectionButton from "../selectionButton/selectionButton"
import Complaint from "../complaint/complaint"
import { simulationComplaints } from "@/data/complaintPrompt"
import { useState } from "react"

interface SimulationProps {
	title: string
	playVideo: boolean
	nextLevel: () => void
	activateButton: boolean
	onVideoEnd: () => void
}
const Simulation: FunctionComponent<SimulationProps> = ({
	title,
	nextLevel,
	playVideo,
	activateButton,
	onVideoEnd,
}) => {
	const videoRef = useRef<HTMLVideoElement>(null)
	const [showComplaint, setShowComplaint] = useState(false)
	const [showPeople, setShowPeople] = useState(false)
	const [showButton, setShowButton] = useState(false)

	const loopVideo = () => {
		if (videoRef.current) {
			onVideoEnd()
			videoRef.current.currentTime = 11.2
			videoRef.current.play()
		}
	}

	useEffect(() => {
		if (videoRef.current && playVideo) {
			videoRef.current.play()
			const timeout = setTimeout(() => {
				setShowPeople(true)
			}, 8800) // TODO: adapt to correct time

			const timeoutComplaints = setTimeout(() => {
				setShowComplaint(true)
			}, 10000) // TODO: adapt to correct time

			const timeoutButton = setTimeout(() => {
				setShowButton(true)
			}, 24500)
			return () => {
				clearTimeout(timeout)
				clearTimeout(timeoutComplaints)
				clearTimeout(timeoutButton)
			}
		}
	}, [playVideo])

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "50px",
			}}
		>
			<div
				style={{
					width: "2000px",
					height: "2000px",
					borderRadius: "1000px",
					background: BackgroundColor,

					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					overflow: "hidden",
					flexDirection: "column",
					boxShadow: " 0px 0px 50px rgba(246, 223, 232, 1)",
				}}
			>
				<video ref={videoRef} muted playsInline src="/videos/simulation.mp4" onEnded={loopVideo} />
				{/* <AICanvas /> */}
			</div>
			<div
				style={{
					//marginTop: "-200px",
					top: "1700px",
					left: "100px",
					position: "absolute",
					height: "150px",
					width: "2000px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					//background: BackgroundColor,
				}}
			>
				{showButton && (
				<SelectionButton
					onClick={nextLevel}
					shine={activateButton}
					background="white"
					color={InterfaceColor}
					activated={activateButton}
				>
					Ja, kann losgehen!
				</SelectionButton>
				) }
			</div>
			{showComplaint && (
				<>
					<Complaint
						messageDelay={1000}
						customAnimation="scaleWithBounce"
						position={{ x: 100, y: 2200 }}
						chatOffset={{ x: 280, y: 100 }}
						messages={simulationComplaints[0].messages}
						imageUrl={simulationComplaints[0].imageUrl}
					/>
					<Complaint
						messageDelay={2000}
						customAnimation="scaleWithBounce"
						position={{ x: 500, y: 2550 }}
						chatOffset={{ x: 220, y: 240 }}
						messages={simulationComplaints[1].messages}
						imageUrl={simulationComplaints[1].imageUrl}
					/>
					<Complaint
						customAnimation="scaleWithBounce"
						position={{ x: 1700, y: 2300 }}
						messages={simulationComplaints[2].messages}
						imageUrl={simulationComplaints[2].imageUrl}
					/>
				</>
			)}
			{showPeople && (
				<>
					<Complaint
						customAnimation="scale"
						position={{ x: 200, y: 950 }}
						messages={simulationComplaints[4].messages}
						imageUrl={simulationComplaints[4].imageUrl}
					/>
					<Complaint
						messageDelay={1000}
						customAnimation="scale"
						position={{ x: 400, y: 800 }}
						chatOffset={{ x: 150, y: -120 }}
						messages={simulationComplaints[3].messages}
						imageUrl={simulationComplaints[3].imageUrl}
					/>
				</>
			)}
		</div>
	)
}

export default Simulation

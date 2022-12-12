import { FunctionComponent, useEffect, useState } from "react"

interface FullscreenProps {
	propagateFullscreenToggle: (isFullscreen: boolean) => void
}

const Fullscreen: FunctionComponent<FullscreenProps> = ({ propagateFullscreenToggle }) => {
	const toogleFullscreen = () => {
		if (document.fullscreenElement) {
			//@ts-ignore
			if (document.webkitExitFullscreen) {
				//@ts-ignore
				document.webkitExitFullscreen()
			}
			//@ts-ignore
			document.exitFullscreen().then(() => console.log("Document Exited from Full screen mode"))
			propagateFullscreenToggle(false)
		} else {
			document.documentElement.requestFullscreen()
			//@ts-ignore
			if (document.documentElement.webkitRequestFullscreen) {
				//@ts-ignore
				document.documentElement.webkitRequestFullscreen()
			}
			propagateFullscreenToggle(true)
		}
	}

	return (
		<>
			<div
				style={{
					position: "absolute",
					background: "white",
					width: "80px",
					height: "80px",
					zIndex: 1000,
					right: 10,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					margin: "20px",
					borderRadius: "10px",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
					cursor: "pointer",
				}}
				onClick={() => toogleFullscreen()}
			>
				<img src="/images/fullscreen.svg" style={{ width: "50%", height: "50%" }} />
			</div>
		</>
	)
}

export default Fullscreen

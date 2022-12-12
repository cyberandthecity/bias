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
					background: "blue",
					width: "40px",
					height: "40px",
					right: "80px",
					top: "10px",
					zIndex: 1000,
				}}
				onClick={() => toogleFullscreen()}
			></div>
		</>
	)
}

export default Fullscreen

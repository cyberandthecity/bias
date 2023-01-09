import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import AICanvas from "./components/ai/aiCanvas"
import Entrance from "./pages/entrance"
import Explanation from "./pages/explanation"
import Game from "./pages/game"
import Zoom from "./pages/zoom"
import ImageGrid from "./pages/zoom3"
import { useGame } from "./stores/gameStore"

const App = () => {
	let navigate = useNavigate()
	const resetLevel = useGame((state) => state.actions.resetLevel)

	let didInputOccur = false
	const [isFullscreen, setIsFullscreen] = useState(false)

	const scale = isFullscreen ? 0.33333 : 0.5
	const rotate = isFullscreen ? -90 : 0
	const translate = isFullscreen ? { x: -2160, y: 0 } : { x: 0, y: 0 }

	const resetGame = () => {
		resetLevel()
		navigate("/")
	}

	const onInput = () => {
		didInputOccur = true
	}

	useEffect(() => {
		document.addEventListener("click", onInput)
		document.addEventListener("touchstart", onInput)

		return () => {
			document.removeEventListener("click", onInput)
			document.removeEventListener("touchstart", onInput)
		}
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			if (!didInputOccur) {
				resetGame()
			} else {
				didInputOccur = false
			}
		}, 60000 * 5) // check for input every 5 minutes

		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<Routes>
				<Route
					path="/"
					element={
						<Entrance
							scale={scale}
							rotate={rotate}
							translate={translate}
							toggleFullscreen={(isFullscreen) => setIsFullscreen(isFullscreen)}
						/>
					}
				/>
				<Route
					path="/entrance"
					element={
						<Entrance
							scale={scale}
							rotate={rotate}
							translate={translate}
							toggleFullscreen={(isFullscreen) => setIsFullscreen(isFullscreen)}
						/>
					}
				/>
				<Route
					path="/explanation"
					element={
						<Explanation
							scale={scale}
							rotate={rotate}
							translate={translate}
							toggleFullscreen={(isFullscreen) => setIsFullscreen(isFullscreen)}
						/>
					}
				/>
				<Route
					path="/game"
					element={
						<Game
							scale={scale}
							rotate={rotate}
							translate={translate}
							toggleFullscreen={(isFullscreen) => setIsFullscreen(isFullscreen)}
						/>
					}
				/>
				<Route
					path="/zoom"
					element={
						<Zoom
							scale={scale}
							rotate={rotate}
							translate={translate}
							toggleFullscreen={(isFullscreen) => setIsFullscreen(isFullscreen)}
						/>
					}
				/>{" "}
				//Images are added randomly on page
				<Route
					path="/zoom3"
					element={
						<ImageGrid
							scale={scale}
							rotate={rotate}
							translate={translate}
							toggleFullscreen={(isFullscreen) => setIsFullscreen(isFullscreen)}
						/>
					}
				/>{" "}
				//AI Canvas experiment
				<Route path="/ai" element={<AICanvas />} />{" "}
			</Routes>
		</>
	)
}

export default App

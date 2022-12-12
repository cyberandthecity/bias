import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Entrance from "./pages/entrance"
import Explanation from "./pages/explanation"
import Game from "./pages/game"
import Zoom from "./pages/zoom"
import ImageGrid from "./pages/zoom3"

const App = () => {
	const [isFullscreen, setIsFullscreen] = useState(false)

	const scale = isFullscreen ? 0.33333 : 0.5
	const rotate = isFullscreen ? -90 : 0
	const translate = isFullscreen ? { x: -2160, y: 0 } : { x: 0, y: 0 }

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
							isFullscreen={isFullscreen}
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
							isFullscreen={isFullscreen}
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
				<Route path="/zoom" element={<Zoom />} /> //Images are added randomly on page
				<Route path="/zoom3" element={<ImageGrid />} /> //Huge grid that zooms out over time
			</Routes>
		</>
	)
}

export default App

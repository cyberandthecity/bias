import { Route, Routes } from "react-router-dom"
import Entrance from "./pages/entrance"
import Explanation from "./pages/explanation"
import Game from "./pages/game"
import Zoom from "./pages/zoom"
import ImageGrid from "./pages/zoom3"

const App = () => {
	const scale = 0.5
	return (
		<>
			<Routes>
				<Route path="/" element={<Entrance scale={scale} />} />
				<Route path="/entrance" element={<Entrance scale={scale} />} />
				<Route path="/explanation" element={<Explanation scale={scale} />} />
				<Route path="/game" element={<Game scale={scale} />} />
				<Route path="/zoom" element={<Zoom />} /> //Images are added randomly on page
				<Route path="/zoom3" element={<ImageGrid />} /> //Huge grid that zooms out over time
			</Routes>
		</>
	)
}

export default App

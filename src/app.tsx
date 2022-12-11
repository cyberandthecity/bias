import { Route, Routes } from "react-router-dom"
import Entrance from "./pages/entrance"
import Explanation from "./pages/explanation"
import Game from "./pages/game"
import Zoom from "./pages/zoom"
import ImageGrid from "./pages/zoom3"

const onDisplay: boolean = false

const App = () => {
	const scale = onDisplay ? 1.0 : 0.35
	const rotate = onDisplay ? -90 : 0
	const translate = onDisplay ? { x: -2160, y: 0 } : { x: 0, y: 0 }

	return (
		<>
			<Routes>
				<Route path="/" element={<Entrance scale={scale} rotate={rotate} translate={translate} />} />
				<Route path="/entrance" element={<Entrance scale={scale} rotate={rotate} translate={translate} />} />
				<Route path="/explanation" element={<Explanation scale={scale} rotate={rotate} translate={translate} />} />
				<Route path="/game" element={<Game scale={scale} rotate={rotate} translate={translate} />} />
				<Route path="/zoom" element={<Zoom />} /> //Images are added randomly on page
				<Route path="/zoom3" element={<ImageGrid />} /> //Huge grid that zooms out over time
			</Routes>
		</>
	)
}

export default App

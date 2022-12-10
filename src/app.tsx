import { Route, Routes } from "react-router-dom"
import Door from "./pages/door"
import Game from "./pages/game"
import Zoom from "./pages/zoom"
import ImageGrid from "./pages/zoom3"

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Door />} />
				<Route path="/door" element={<Door />} />
				<Route path="/game" element={<Game />} />
				<Route path="/zoom" element={<Zoom />} /> //Images are added randomly on page
				<Route path="/zoom3" element={<ImageGrid />} /> //Huge grid that zooms out over time
			</Routes>
		</>
	)
}

export default App

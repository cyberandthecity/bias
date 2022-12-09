import { Route, Routes } from "react-router-dom"
import Entrance from "./pages/entrance"
import Explanation from "./pages/explanation"
import Game from "./pages/game"

const App = () => {
	const scale = 0.5
	return (
		<>
			<Routes>
				<Route path="/" element={<Entrance scale={scale} />} />
				<Route path="/entrance" element={<Entrance scale={scale} />} />
				<Route path="/explanation" element={<Explanation scale={scale} />} />
				<Route path="/game" element={<Game scale={scale} />} />
			</Routes>
		</>
	)
}

export default App

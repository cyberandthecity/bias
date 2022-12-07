import { Route, Routes } from "react-router-dom"
import Door from "./pages/door"
import Explanation from "./pages/explanation"
import Game from "./pages/game"

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Door />} />
				<Route path="/door" element={<Door />} />
				<Route path="/explanation" element={<Explanation />} />
				<Route path="/game" element={<Game />} />
			</Routes>
		</>
	)
}

export default App

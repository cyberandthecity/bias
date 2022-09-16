import { Route, Routes } from "react-router-dom"
import Scene from "@/components/scenes/scene"

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Scene />} />
			</Routes>
		</>
	)
}

export default App

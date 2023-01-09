import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { FunctionComponent, Suspense } from "react"

import Marble from "./marble"

interface AICanvasProps {}

const AICanvas: FunctionComponent<AICanvasProps> = ({}) => {
	return (
		<Canvas
			shadows
			camera={{
				position: [0, 0, 0.72],
			}}
			style={{
				width: "250px",
				height: "250px",
			}}
		>
			<color args={["white"]} attach="background" />

			<Suspense fallback={null}>
				<Marble />
			</Suspense>

			<group>
				<Suspense fallback={null}>
					<Environment preset="sunset" />
				</Suspense>

				<directionalLight position={[-0.5, 1, -0.5]} intensity={0.5} />
				<directionalLight position={[-1, 1, 1]} intensity={0.2} />
				<ambientLight intensity={0.5} />

				<directionalLight castShadow intensity={0.01} args={["#ffffff"]} position={[0, 100, -100]} />
			</group>

			{/* <gridHelper args={[200, 100, "#1100ff", "#1100ff"]} position={[0, -1.26, 0]} />
			<gridHelper args={[200, 1000, "#1100ff", "#1100ff"]} position={[0, -1.27, 0]} /> */}
			<OrbitControls />
		</Canvas>
	)
}

export default AICanvas

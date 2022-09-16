import Camera from "@/components/camera/camera"
import Environment from "@/components/environment/environment"
import { MapControls, OrbitControls, Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { FunctionComponent, useEffect } from "react"
import { NoToneMapping, sRGBEncoding, Vector3 } from "three"

import studio from "@theatre/studio"
import extension from "@theatre/r3f/dist/extension"
import { editable as e, SheetProvider } from "@theatre/r3f"
import { getProject } from "@theatre/core"

studio.initialize()
studio.extend(extension)

interface SceneProps {}

const Scene: FunctionComponent<SceneProps> = ({}) => {
	return (
		<div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
			<Canvas
				shadows
				dpr={[1, 2]}
				gl={{ antialias: true }}
				onCreated={({ gl }) => {
					gl.toneMapping = NoToneMapping
					gl.outputEncoding = sRGBEncoding
				}}
			>
				<SheetProvider sheet={getProject("Demo Project").sheet("Demo Sheet")}>
					<Camera />
					<Environment />
					{/* <e.mesh theatreKey="Cube">
					<sphereGeometry attach="geometry" args={[10, 32, 32]} />
					<meshStandardMaterial attach="material" color="white" side={1} />
				</e.mesh> */}
					{/* <Stats /> */}
					<OrbitControls target={[0, 1.0, -0.5]} />
					{/* <Postprocessing /> */}
				</SheetProvider>
			</Canvas>
		</div>
	)
}

export default Scene

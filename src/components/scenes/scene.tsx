import Camera from "@/components/camera/camera"
import Environment from "@/components/environment/environment"
import { MapControls, OrbitControls, Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Box } from "@react-three/drei"
import { FunctionComponent, useEffect } from "react"
import { NoToneMapping, sRGBEncoding, Vector3 } from "three"

import studio from "@theatre/studio"
import extension from "@theatre/r3f/dist/extension"
import { editable as e, SheetProvider } from "@theatre/r3f"
import { getProject } from "@theatre/core"

studio.initialize()
studio.extend(extension)

interface SceneProps {}

const demoSheet = getProject("Demo Project").sheet("Demo Sheet")

const Scene: FunctionComponent<SceneProps> = ({}) => {
	useEffect(() => {
		demoSheet.sequence.play({ iterationCount: Infinity, range: [0, 1] })
	}, [])

	return (
		<div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
			<Canvas
				shadows
				dpr={[1, 2]}
				gl={{ antialias: true, preserveDrawingBuffer: true }}
				onCreated={({ gl }) => {
					gl.toneMapping = NoToneMapping
					gl.outputEncoding = sRGBEncoding
				}}
			>
				<SheetProvider sheet={demoSheet}>
					<Camera />
					<Environment />
					{/* <Stats /> */}
					{/* <Postprocessing /> */}
				</SheetProvider>
			</Canvas>
		</div>
	)
}

export default Scene

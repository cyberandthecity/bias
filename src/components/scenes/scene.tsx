import Camera from "@/components/camera/camera"
import Environment from "@/components/environment/environment"
import { MapControls, OrbitControls, Stats } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import { FunctionComponent } from "react"
import { NoToneMapping, sRGBEncoding, Vector3 } from "three"

interface SceneProps {}

const Scene: FunctionComponent<SceneProps> = ({}) => {
	return (
		<Canvas
			shadows
			dpr={[1, 2]}
			gl={{ antialias: true }}
			onCreated={({ gl }) => {
				gl.toneMapping = NoToneMapping
				gl.outputEncoding = sRGBEncoding
			}}
		>
			<Camera />
			<Environment />
			<Stats />
			<OrbitControls target={[0, 1.0, -0.5]} />
			{/* <Postprocessing /> */}
		</Canvas>
	)
}

export default Scene

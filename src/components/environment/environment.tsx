import { Box, ContactShadows, Environment as EnvironmentLight } from "@react-three/drei"
import { editable as e } from "@theatre/r3f"
import { Suspense } from "react"

import { MathUtils, Mesh } from "three"
import PaperClip from "../models/PaperClip"
import Photo from "../photo/photo"

const Environment = () => {
	return (
		<>
			<EnvironmentLight preset="city" />
			<hemisphereLight intensity={1} groundColor="white" />
			<directionalLight position={[10, 15, 10]} intensity={1} />

			{/* <fog attach="fog" args={["white", 2, 10]} /> */}
			{/* <ContactShadows resolution={1024} position={[0, -0.01, 0]} scale={8} blur={0.4} far={2} opacity={0.3} /> */}

			{
				//@ts-ignore
				<e.mesh theatreKey="Screen">
					<boxGeometry args={[0.68, 1.21, 0.02]} />
					<meshStandardMaterial attach="material" color="green" />
				</e.mesh>
			}

			<Photo />
			<Suspense fallback={null}>
				<PaperClip />
			</Suspense>
		</>
	)
}

export default Environment

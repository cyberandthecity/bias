import { ContactShadows, Environment as EnvironmentLight } from "@react-three/drei"
import { Suspense } from "react"

import { MathUtils } from "three"
import PaperClip from "../models/PaperClip"

const Environment = () => {
	return (
		<>
			<EnvironmentLight preset="city" />
			<hemisphereLight intensity={1} groundColor="white" />
			<directionalLight position={[10, 15, 10]} intensity={1} />
			<ContactShadows resolution={1024} position={[0, -0.01, 0]} scale={8} blur={0.4} far={2} opacity={0.3} />

			<fog attach="fog" args={["white", 2, 10]} />
			{/* <gridHelper args={[100, 250, "#222000", "#000"]} /> */}

			<mesh receiveShadow rotation={[MathUtils.degToRad(90), 0, 0]} position={[0, -0.02, 0]}>
				<planeBufferGeometry attach="geometry" args={[100, 100]} />
				<meshBasicMaterial attach="material" color="white" side={1} />
			</mesh>

			<mesh receiveShadow position={[0, 0, 0]}>
				<sphereGeometry attach="geometry" args={[10, 32, 32]} />
				<meshStandardMaterial attach="material" color="white" side={1} />
			</mesh>

			<Suspense fallback={null}>
				<PaperClip />
			</Suspense>
		</>
	)
}

export default Environment

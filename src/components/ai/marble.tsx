import { Edges, Sphere } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Depth, Displace, Fresnel, LayerMaterial } from "lamina"
import { Displace as DisplaceType, LayerMaterial as LayerMaterialType } from "lamina/vanilla"
import { FunctionComponent, useMemo, useRef, useState } from "react"
import { Mesh, Vector3 } from "three"

interface MarbleProps {}

const Marble: FunctionComponent<MarbleProps> = ({}) => {
	const ref = useRef<LayerMaterialType>(null!)
	const rand = useMemo(() => Math.random(), [])
	const strength = useRef(0)
	const gradient = 0.7

	// Animate gradient
	useFrame((state) => {
		if (ref.current) {
			const sin = Math.sin(state.clock.elapsedTime / 2)
			const cos = Math.cos(state.clock.elapsedTime / 2)
			//@ts-ignore
			ref.current.layers[0].origin.set(cos / 2, 0, 0)
			//@ts-ignore
			ref.current.layers[1].origin.set(cos, sin, cos)
			//@ts-ignore
			ref.current.layers[2].origin.set(sin, cos, sin)
			//@ts-ignore
			ref.current.layers[3].origin.set(cos, sin, cos)
		}
	})

	return (
		<group>
			<mesh position={[0, 0, 0]}>
				<boxBufferGeometry args={[0.1, 0.1, 0.1]} />
				<meshStandardMaterial color={"green"} />
			</mesh>

			<Sphere
				castShadow
				onPointerEnter={() => (strength.current = 0.2)}
				onPointerLeave={() => (strength.current = 0)}
				args={[0.4, 128, 128]}
			>
				<LayerMaterial ref={ref} toneMapped={false}>
					<Depth
						colorA="#ff0080"
						colorB="black"
						alpha={1}
						mode="normal"
						near={0.5 * gradient}
						far={0.5}
						origin={[0, 0, 0]}
					/>
					<Depth colorA="blue" colorB="#f7b955" alpha={1} mode="add" near={2 * gradient} far={2} origin={[0, 1, 1]} />
					<Depth colorA="green" colorB="#f7b955" alpha={1} mode="add" near={3 * gradient} far={3} origin={[0, 1, -1]} />
					<Depth
						colorA="white"
						colorB="red"
						alpha={1}
						mode="overlay"
						near={1.5 * gradient}
						far={1.5}
						origin={[1, -1, -1]}
					/>
					<Fresnel mode="add" color="white" intensity={0.5} power={1.5} bias={0.05} />
				</LayerMaterial>
				<Edges color="white" />
			</Sphere>
		</group>
	)
}

export default Marble

import { useThree } from "@react-three/fiber"
import { FunctionComponent, useLayoutEffect, useState } from "react"

interface ScaleProps {
	width: number
	height: number
}

const Scale: FunctionComponent<ScaleProps> = ({ width, height }) => {
	const state = useThree()
	const [setSize] = useState(() => state.setSize)
	useLayoutEffect(() => {
		setSize(width, height)
		state.set({ setSize: () => null })
		return () => state.set({ setSize })
	}, [setSize, width, height])
	return null
}

export default Scale

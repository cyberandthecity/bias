import { MapControls, OrthographicCamera } from "@react-three/drei"
import { editable as e, SheetProvider } from "@theatre/r3f"

const EditableCamera = e(OrthographicCamera, "orthographicCamera")

const Camera = () => {
	return (
		<>
			<EditableCamera theatreKey="Camera" makeDefault zoom={1000} />
			<MapControls />
		</>
	)
}

export default Camera

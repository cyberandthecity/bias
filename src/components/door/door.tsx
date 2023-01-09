import { FunctionComponent } from "react"

interface DoorProps {}

const Door: FunctionComponent<DoorProps> = ({}) => {
	return (
		<div style={{ position: "absolute", width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}>
			<img style={{ position: "absolute" }} src="/images/door.png" alt="door" />
		</div>
	)
}

export default Door

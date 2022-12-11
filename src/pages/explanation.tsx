import Background from "@/components/background/background"
import ClubScene from "@/components/scenes/clubScene"
import Title from "@/components/title/title"
import { FunctionComponent } from "react"

interface ExplanationProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
}

const Explanation: FunctionComponent<ExplanationProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
}) => {
	return (
		<Background offset={800} scale={scale} rotate={rotate} translate={translate}>
			<Title title="Club Entrance" />
			<ClubScene />
		</Background>
	)
}

export default Explanation

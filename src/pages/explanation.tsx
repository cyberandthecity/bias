import Background from "@/components/background/background"
import ClubScene from "@/components/scenes/clubScene"
import Title from "@/components/title/title"
import { FunctionComponent } from "react"

interface ExplanationProps {
	scale?: number
}

const Explanation: FunctionComponent<ExplanationProps> = ({ scale = 1.0 }) => {
	return (
		<Background offset={800} scale={scale}>
			<Title title="Club Entrance" />
			<ClubScene />
		</Background>
	)
}

export default Explanation

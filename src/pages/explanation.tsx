import Background from "@/components/background/background"
import ClubScene from "@/components/scenes/clubScene"
import Title from "@/components/title/title"
import { FunctionComponent } from "react"

interface ExplanationProps {}

const Explanation: FunctionComponent<ExplanationProps> = ({}) => {
	return (
		<Background offset={800}>
			<Title title="Club Entrance" />
			{/* <ClubScene /> */}
		</Background>
	)
}

export default Explanation

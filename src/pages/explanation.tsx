import Background from "@/components/background/background"
import Title from "@/components/title/title"
import { FunctionComponent } from "react"

interface ExplanationProps {}

const Explanation: FunctionComponent<ExplanationProps> = ({}) => {
	return (
		<Background offset={800}>
			<Title title="Club Entrance" />
		</Background>
	)
}

export default Explanation

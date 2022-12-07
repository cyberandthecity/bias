import { FunctionComponent } from "react"
import { InterfaceColor } from "@/utils/theme"

interface TitleProps {
	title: string
	isInAI?: boolean
}

const Title: FunctionComponent<TitleProps> = ({ title, isInAI = false }) => {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				padding: "65px",
				position: "absolute",
			}}
		>
			<p
				style={{
					fontSize: "82px",
					fontWeight: "bold",
					color: isInAI ? InterfaceColor : "white",
					opacity: isInAI ? 0.2 : 0.8,
				}}
			>
				{title}
			</p>
		</div>
	)
}

export default Title

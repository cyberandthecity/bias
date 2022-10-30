import { FunctionComponent } from "react"
import { InterfaceColor } from "@/utils/theme"

interface TitleProps {
	title: string
}

const Title: FunctionComponent<TitleProps> = ({ title }) => {
	return (
		<div
			style={{
				width: "100%",
				display: "flex",
				padding: "65px",
				position: "absolute",
			}}
		>
			<p style={{ fontSize: "82px", fontWeight: "bold", color: InterfaceColor, opacity: 0.2 }}>{title}</p>
		</div>
	)
}

export default Title

import { InterfaceColor } from "@/utils/theme"
import React, { FunctionComponent } from "react"

interface SelectionButtonProps {
	onClick: () => void
	children: React.ReactNode
}

const SelectionButton: FunctionComponent<SelectionButtonProps> = ({ onClick, children }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					background: InterfaceColor,
					padding: "20px 40px 20px 40px",
					borderRadius: "10px",
					width: "fit-content",
					fontSize: "42px",
					fontWeight: 500,
					color: "white",
					boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.16)",
					cursor: "pointer",
				}}
				onClick={onClick}
			>
				{children}
			</div>
		</div>
	)
}

export default SelectionButton

import { InterfaceColor } from "@/utils/theme"
import React, { FunctionComponent } from "react"
import "@/styles/shining.css"

interface SelectionButtonProps {
	onClick: () => void
	children: React.ReactNode
	shine: boolean
}

const SelectionButton: FunctionComponent<SelectionButtonProps> = ({ onClick, children, shine }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			}}
		>
			<div
				className={shine ? "shine" : ""}
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
					overflow: "hidden",
				}}
				onClick={onClick}
			>
				{children}
			</div>
		</div>
	)
}

export default SelectionButton

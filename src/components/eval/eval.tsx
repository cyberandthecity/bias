import React from "react"
import AI from "@/components/ai/ai"
import ImageAdder2 from "@/components/imageadder2/imageadder2"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import SelectionButton from "@/components/selectionButton/selectionButton"
import { InterfaceColor, HighlightColor, BackgroundColor } from "@/utils/theme"
import { useNavigate } from "react-router-dom"
import "@/styles/fadeInButton.css"
import "@/styles/shining.css"
import "@/styles/fadeInEval.css"
import ImageMatrix from "../imageMatrix/imageMatrix"
import EvalFeedback from "../evalFeedback/evalFeedback"
import EmojiDot from "./emojiDot"

interface EvalProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

export const imagesLevel1 = [
	["/datasets/gender_3x2/set03/image_1.png", "/datasets/gender_3x2/set03/image_4.png"],
	["/datasets/gender_3x2/set03/image_2.png", "/datasets/gender_3x2/set03/image_5.png"],
	["/datasets/gender_3x2/set03/image_3.png", "/datasets/gender_3x2/set03/image_0.png"],
]

export const imagesLevel2 = [
	["/datasets/glasses_4x3/set01/image_3.png", "/datasets/glasses_4x3/set01/image_9.png"],
	["/datasets/glasses_4x3/set01/image_7.png", "/datasets/glasses_4x3/set01/image_10.png"],
	["/datasets/glasses_4x3/set01/image_8.png", "/datasets/glasses_4x3/set01/image_11.png"],
]

export const imagesLevel3_1 = [
	["/datasets/tech_5x4/set01/image_4.png", "/datasets/tech_5x4/set01/image_16.png"],
	["/datasets/tech_5x4/set01/image_9.png", "/datasets/tech_5x4/set01/image_15.png"],
	["/datasets/tech_5x4/set01/image_14.png", "/datasets/tech_5x4/set01/image_17.png"],
]

export const imagesLevel3_2 = [["/datasets/tech_5x4/set01/image_18.png"], ["/datasets/tech_5x4/set01/image_19.png"]]

const Eval: FunctionComponent<EvalProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
	let navigate = useNavigate()
	const resetLevel = useGame((state) => state.actions.resetLevel)

	const level = useGame((state) => state.levels[state.currentLevel])
	const [showSecondComponent, setShowSecondComponent] = useState(false)
	const [showForegroundText, setShowForegroundText] = useState(false)

	const handleButtonClick = () => {
		setShowSecondComponent(true)
		setTimeout(() => {
			setShowForegroundText(true)
		}, 5500) // set timer of "Zum realistischen Beispiel" button
	}

	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div
					style={{
						display: "flex",
						//padding: "65px 65px 25px 65px",
						gap: "65px",
						flexDirection: "column",
						//background: BackgroundColor,
					}}
				>
					{/* <div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							height: "60px",
						}}
					>
						<p style={{ fontSize: "52px", fontWeight: 600, color: InterfaceColor }}>{"Finaler Datensatz"}</p>
					</div> */}

					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							width: "100%",
							gap: "50px",
							alignItems: "center",
						}}
					>
						{/* Level 1 */}
						<div
							className="fadeIn1"
							style={{
								display: "flex",
								flexDirection: "row",
								gap: "80px",
								width: "100%",
								justifyContent: "center",
								background: "rgba(246, 348, 255, 0.2)",
								paddingTop: "30px",
								paddingBottom: "30px",
								backdropFilter: "blur(100px)",
							}}
						>
							<EmojiDot emoji="gender" orientation="right" />
							<ImageMatrix imageArray={imagesLevel1} />
							<EvalFeedback
								title="Level 1"
								orientation="left"
								text="In LEVEL 1 wurde die KI darauf trainiert, weibliche und männliche Studierende 
									gleich gut zu erkennen. "
							/>
						</div>
						<div
							className="fadeIn2"
							style={{
								display: "flex",
								flexDirection: "row",
								gap: "50px",
								width: "100%",
								justifyContent: "center",
								background: "rgba(246, 348, 255, 0.2)",
								paddingTop: "20px",
								paddingBottom: "20px",
								backdropFilter: "blur(100px)",
							}}
						>
							<EvalFeedback
								title="Level 2"
								orientation="right"
								text="In LEVEL 2 wurde die KI darauf trainiert, Studierende unabhängig von einer Brille 
									zu erkennen. Auch wenn dies für uns Menschen kein Problem ist, muss der KI beigebracht werden, 
									dass eine Brille hier nicht die Entscheidung beeinflussen soll. "
							/>
							<ImageMatrix imageArray={imagesLevel2} />
							<EmojiDot emoji="glasses" orientation="left" />
						</div>
						<div
							className="fadeIn3"
							style={{
								display: "flex",
								flexDirection: "row",
								gap: "50px",
								width: "100%",
								justifyContent: "center",
								background: "rgba(246, 348, 255, 0.2)",
								paddingTop: "20px",
								paddingBottom: "20px",
								backdropFilter: "blur(100px)",
							}}
						>
							<EmojiDot emoji="moon" orientation="right" />
							<div>
								<ImageMatrix imageArray={imagesLevel3_1} />
								<ImageMatrix imageArray={imagesLevel3_2} />
							</div>
							<EvalFeedback
								title="Level 3"
								orientation="left"
								text="In LEVEL 3 wurde die KI darauf trainiert, Studierende unabhängig von Hintergrund und 
									Lichtverhältnissen zu erkennen. Wie bei der Brille, ist dies zwar selbstverständlich für uns, 
									die KI aber weiß nicht, was 'relevante' Merkmale sind und welche ignoriert werden können."
							/>
						</div>
						<div
							className="fadeIn4"
							style={{
								display: "flex",
								flexDirection: "row",
								gap: "50px",
								width: showForegroundText ? "1200px" : "100%",
								borderRadius: showForegroundText ? "20px" : "0px",
								justifyContent: "center",
								background: showForegroundText ? "rgba(246, 348, 255, 0.95)" : "rgba(246, 348, 255, 0.2)",
								paddingTop: "40px",
								paddingBottom: "40px",
								backdropFilter: "blur(100px)",
								zIndex: 100,
								transform: showForegroundText ? "translateY(-1000px)" : "translateY(0%)",
								boxShadow: showForegroundText ? "0px 0px 200px 0px rgba(0,0,0,0.75)" : "none",
								transition: "all 1s",
							}}
						>
							<div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
								<p
									style={{
										fontSize: showForegroundText ? "50px" : "40px",
										color: InterfaceColor,
										textAlign: "center",
										padding: showForegroundText ? "60px" : "0px",
										transition: "all 1s",
									}}
								>
									{showForegroundText ? (
										<>"Um zu lernen, braucht eine KI viel mehr Beispiele!"</>
									) : (
										"Bei 20 Bildern war das schon gar nicht so einfach, oder..?"
									)}
								</p>
								{showForegroundText && (
									<SelectionButton
										onClick={() => navigate("/explanation")}
										shine={true}
										background={InterfaceColor}
										color="white"
									>
										Weiter
									</SelectionButton>
								)}
							</div>
						</div>
					</div>
				</div>

				{!showForegroundText ? (
					<div
						className="fadeIn4"
						style={{
							height: "150px",
							width: "100%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "65px",
							zIndex: 10000,
							boxShadow: showForegroundText ? "0px 0px 200px 0px rgba(0,0,0,0.75)" : "none",
							background: BackgroundColor,
							transition: "all 1s",
						}}
					>
						{!showForegroundText && (
							<SelectionButton onClick={handleButtonClick} shine={true} background={InterfaceColor} color="white">
								Zum realistischen Beispiel
							</SelectionButton>
						)}
						;
					</div>
				) : null}
			</div>

			{showSecondComponent && <ImageAdder2 />}
		</>
	)
}
export default Eval

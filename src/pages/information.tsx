import React from "react"
import AI from "@/components/ai/ai"
import ImageGrid from "@/components/ImageGrid/ImageGrid"
import ImageAdder2 from "@/components/imageadder2/imageadder2"
import Background from "@/components/background/background"
import Title from "@/components/title/title"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import Restart from "@/components/restart/restart"
import Fullscreen from "@/components/fullscreen/fullscreen"
import SelectionButton from "@/components/selectionButton/selectionButton"
import { InterfaceColor } from "@/utils/theme"
import { useNavigate } from "react-router-dom"


interface InformationProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Information: FunctionComponent<InformationProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
    let navigate = useNavigate()
    const prevlevel = useGame((state) => state.levels[state.currentLevel-1])


	return (
		<Background offset={800} scale={scale} rotate={rotate} translate={translate}>
            <Restart />
        	<Fullscreen propagateFullscreenToggle={toggleFullscreen} />    
			<Title title="Bias & KI" />
            <div
				style={{
					position: "absolute",
					width: "912px",
					height: "182px",
                    left: "445px",
                    top: "591px",
					justifyContent: "center",

                    fontFamily: 'Inter',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "60px",
                    lineHeight: "73px",
                    textAlign: "justify",
                    color: "white",
				}}
			>
                <p>Mehr zum Thema   </p>

                <p
                    style={{
                        position: "absolute",
                        width: "1250px",
                        height: "1448px",
                        top: "200px",
                        fontSize: "36px",
                        lineHeight: "150%",
                        textAlign: "justify",
                        color: "white",
                    }}
                > Durch unser Spiel hast Du bereits eine erste Erfahrung damit gemacht, wie schwer es ist, Bias in den Daten zu verhindern. 
                Hier findest du nochmal ein paar Details zu den Schwierigkeiten, die dieses Thema in unserem Alltag mit sich bringt. ...
                </p>
            </div>
            <div
				style={{
                    position: "absolute",
                    bottom: "1000px",
					height: "150px",
					width: "2000px",
                    left: "80px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",

					//background: BackgroundColor,
				}}
			>
				<SelectionButton
					onClick={() => navigate("/")}
					shine={true}
					background="white"
					color={InterfaceColor}
				>
					Neustart
				</SelectionButton>
			</div>

			
		</Background>
	)
}
    


export default Information
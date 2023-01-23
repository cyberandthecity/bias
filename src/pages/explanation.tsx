import React from "react"
import Background from "@/components/background/background"
import Title from "@/components/title/title"
import { Dataset, useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import Restart from "@/components/restart/restart"
import Fullscreen from "@/components/fullscreen/fullscreen"
import SelectionButton from "@/components/selectionButton/selectionButton"
import { InterfaceColor } from "@/utils/theme"
import { useNavigate } from "react-router-dom"
import ExplanationText from "@/components/explanation/explanationText" 

interface ExplanationProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Explanation: FunctionComponent<ExplanationProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
    let navigate = useNavigate()
    const resetlevel = useGame((state) => state.actions.resetLevel)

	return (
		<Background offset={800} scale={scale} rotate={rotate} translate={translate}>
            <Restart />
        	<Fullscreen propagateFullscreenToggle={toggleFullscreen} />    
			<Title title="Mehr zu Bias und KI" />
			<ExplanationText 
				paragraph1="Durch unser Spiel hast Du bereits erste Erfahrungen damit gemacht, wie schwer es ist, Bias in einer KI zu verhindern. 
                Hier findest du nochmal ein paar Details zu den Schwierigkeiten, die dieses Thema in unserem Alltag mit sich bringt." 
				subtitle2="Bias? Was ist nochmal Bias?"
				paragraph2="Als Bias bezeichnet man in der KI Wissenschaft eine Verzerrung des gewünschten Ergebnisses. 
				Diese Verzerrung kann harmlos sein, aber auch schwere Folgen haben und zum Beispiel zu Diskriminierung führen."
				subtitle3="Wie vermeiden wir Bias?"
				paragraph3_1="Wir haben uns für dieses Spiel auf 3 Fälle von Bias beschränkt, die in verschiedenen Formen auftreten, 
				um die Vielfältigkeit des Themas zu verdeutlichen. Aufgrund dieser Vielfältigkeit haben auch wir in unserem Datensatz 
				sicherlich einige Ungleichheiten nicht beachten können, zum Beispiel Hautfarbe, Alter oder Behinderungen."
				paragraph3_2=" Grundsätzlich gilt jedoch, dass eine möglichst große Diversität in der Datensammlung angestrebt werden sollte, 
				um Bias zu vermeiden. In der Realität stehen Entwickler_innen also vor einer noch größeren Aufgabe als im Spiel, 
				denn nicht nur müssen möglichst alle Ungleichheiten beachtet werden, in den meisten Fällen liegt die Anzahl der Daten im Millionenbereich."
				subtitle4="Bias und Gesellschaft"
				paragraph4="Abgesehen von der Rolle der Entwickler_innen gilt auch, dass die verwendeten Daten immer ein Spiegel der Realität 
				und somit auch unserer Gesellschaft sind. Das heißt auch die Gesellschsaft, in der KI Systeme zur Anwendung kommen, 
				trägt Verantwortung dafür, wie diese eingesetzt werden und mit welchen Daten diese trainiert werden können und dürfen."
			/>

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
					onClick={() => {
						resetlevel()
						navigate("/")
					}}
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

export default Explanation
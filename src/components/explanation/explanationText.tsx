import React from "react"
import { FunctionComponent, useEffect, useState } from "react"
import { InterfaceColor } from "@/utils/theme"
import ChatMessage, { Message } from "../message/message"
import "@/styles/stamp.css"


interface TextProps {
}


//,subtitle1,paragraph1,subtitle2,paragraph2,subtitle3,paragraph3,subtitle4,paragraph4
const ExplanationText: FunctionComponent<TextProps> = ({}) => {
    return (
        <div>

		
        //information boxes
        <div
            style={{
                position: "absolute",
                left: "430px",
                top: "790px",
                width: "1220px",
                marginTop: "60px",
                padding: "40px",
                backgroundColor: "rgba(250,250,250,0.3)" ,
                borderRadius: "20px",
                color: "white",
                textAlign: "justify",
                textShadow: "0px 0px 2px black",
                justifyContent: "center",
            }}>
            <p
                style={{
                    position: "relative",
                    left: "80px",
                    fontSize: "42px",
                    justifyContent: "center",
                }}
            >
            Bias? Was ist nochmal Bias?"
            </p>
            <p
                style={{
                    position: "relative",
                    marginTop: "40px",
                    width: "1120px",
                    left: "50px",
                    fontSize: "32px",
                }}
            > Als Bias bezeichnet man in der KI Wissenschaft eine <b> Verzerrung des gewünschten Ergebnisses</b>.
            Diese Verzerrung kann harmlos sein, aber auch <b>schwere Folgen</b> haben und zum Beispiel zu Diskriminierung führen.
            </p>
            <p
                className="stamp"
                style={{
                    top: "20px",
                    left: "20px",
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    background: "white",
                    borderRadius: "50%",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.16)",
                }}
            >
            <img src="/emojis/light-bulb.png" style={{width: "75px"}} />
            </p>
        </div>
        <div
            style={{
                position: "absolute",
                left: "430px",
                top: "1180px",
                width: "1220px",
                marginTop: "60px",
                padding: "40px",
                backgroundColor: "rgba(250,250,250,0.3)" ,
                borderRadius: "20px",
                color: "white",
                textAlign: "justify",
                textShadow: "0 0 2px black"

            }}>
            <p
                style={{
                    position: "relative",
                    left: "80px",
                    fontSize: "42px",
                }}
            > Wie vermeiden wir Bias?
            </p>
            <p
                style={{
                    position: "relative",
                    left: "50px",
                    width: "1120px",
                    marginTop: "40px",
                    fontSize: "32px",
                }}
            >
            Grundsätzlich gilt jedoch, dass eine möglichst <b>große Diversität in der Datensammlung</b> angestrebt werden sollte, 
			um Bias zu vermeiden. In der Realität stehen Entwickler_innen also vor einer noch größeren Aufgabe als im Spiel, 
			denn <b>nicht nur</b> müssen möglichst alle Ungleichheiten beachtet werden, in den meisten Fällen liegt die Anzahl der Daten im <b>Millionenbereich</b>.
            </p>
            <p
                style={{
                    position: "relative",
                    left: "50px",
                    width: "1120px",
                    marginTop: "20px",
                    fontSize: "32px",
                }}
            > 
            Wir haben uns für dieses Spiel <b>auf drei Fälle von Bias beschränkt</b>, die in verschiedenen Formen auftreten, 
			um die Vielfältigkeit des Themas zu verdeutlichen. Aufgrund dieser Vielfältigkeit haben auch wir in unserem Datensatz 
			sicherlich einige Ungleichheiten <b>nicht abbilden können</b>, zum Beispiel was Hautfarbe, Alter oder Behinderungen.
            </p>
            <p
                className="stamp"
                style={{
                    top: "20px",
                    left: "20px",
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    background: "white",
                    borderRadius: "50%",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.16)",
                }}
            >
            <img src="/emojis/thinking-face.png" style={{width: "75px"}} />
            </p>
        </div>
        <div
            style={{
                position: "absolute",
                left: "430px",
                top: "1908px",
                width: "1220px",
                marginTop: "60px",
                padding: "40px",
                backgroundColor: "rgba(250,250,250,0.3)" ,
                borderRadius: "20px",
                color: "white",
                textAlign: "justify",
                textShadow: "0px 0px 2px black"
            }}>
            <p
                style={{
                    position: "relative",
                    left: "80px",
                    fontSize: "42px",
                }}
            >Bias und Gesellschaft</p>
            <p
                style={{
                    position: "relative",
                    left: "50px",
                    width: "1120px",
                    marginTop: "40px",
                    fontSize: "32px",
                }}
            >Abgesehen von der Rolle der Entwickler_innen gilt auch, dass die verwendeten Daten immer ein <b>Spiegel der Realität </b> 
            und somit auch <b>unserer Gesellschaft</b> sind. Das heißt auch die Gesellschsaft, in der KI Systeme zur Anwendung kommen, 
            <b> trägt Verantwortung</b> dafür, wie diese eingesetzt werden und mit welchen Daten diese trainiert werden können und dürfen.
            </p>
            <p
                className="stamp"
                style={{
                    top: "20px",
                    left: "20px",
                    position: "absolute",
                    width: "80px",
                    height: "80px",
                    background: "white",
                    borderRadius: "50%",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.16)",
                }}
            >
                <img src="/emojis/pointingUp.png" style={{width: "75px"}} />
            </p>
        </div>
        </div>
	)
}

export default ExplanationText
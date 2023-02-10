import React from "react"
import { FunctionComponent, useEffect, useState } from "react"
import { InterfaceColor } from "@/utils/theme"
import ChatMessage, { Message } from "../message/message"
import "@/styles/stamp.css"
import "@/styles/bounceComplaint.css"
import "@/styles/globals.css"
import "@/styles/shining.css"


interface TextProps {}

const ExplanationText: FunctionComponent<TextProps> = ({}) => {
	return (
		<div>
            <div
                style={{
                    position: "absolute",
                    top: "1060px",
                    left: "220px",
                    display: "flex",
                    flexDirection: "row",
                    transform: "scale(1.0)",
                    WebkitTransform: "scale(1)",
                    zIndex: 1,
                }}
		    >
                <div className="scale" style={{}}>
                    <img src={"/datasets/evaluation/3.png"}
                        style={{
                            width: "130px",
                            height: "130px",
                            borderRadius: "1000px",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            background: "white",
                            border: "3px solid white",
                            filter: "drop-shadow(0px 0px 30px rgba(246, 223, 232, 1))",
                        }}
				    />
                </div>
            </div>
			<div
				style={{
					position: "absolute",
					left: "430px",
					top: "910px", //"885px",
					width: "1220px",
					marginTop: "60px",
					padding: "40px",
					backgroundColor: "rgba(250,250,250,0.3)",
					borderRadius: "20px",
					color: "white",
					textAlign: "justify",
					textShadow: "0px 0px 2px black",
					justifyContent: "center",
					backdropFilter: "blur(200px)",
				}}
			>
				<p
					style={{
						position: "relative",
						left: "80px",
						fontSize: "42px",
						justifyContent: "center",
					}}
				>
					Bias? Was ist nochmal Bias?
				</p>
				<p
					style={{
						position: "relative",
						marginTop: "40px",
						width: "1120px",
						left: "50px",
						fontSize: "34px",
					}}
				>
					{" "}
					Als Bias bezeichnet man in der KI-Wissenschaft eine <b> Verzerrung </b>des gewünschten Ergebnisses. Diese
					Verzerrung kann harmlos sein, aber auch <b>schwere Folgen</b> haben und zum Beispiel zu Diskriminierung
					führen.
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
					<img src="/emojis/light-bulb.png" style={{ width: "75px" }} />
				</p>
			</div>
            <div
                style={{
                    position: "absolute",
                    top: "1615px",
                    left: "220px",
                    display: "flex",
                    flexDirection: "row",
                    transform: "scale(1.0)",
                    WebkitTransform: "scale(1)",
                    zIndex: 1,
                }}
		    >
                <div className="scale" style={{}}>
                    <img src={"/datasets/evaluation/45.png"}
                        style={{
                            width: "130px",
                            height: "130px",
                            borderRadius: "1000px",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            background: "white",
                            border: "3px solid white",
                            filter: "drop-shadow(0px 0px 30px rgba(246, 223, 232, 1))",
                        }}
				    />
                </div>
            </div>
			<div
				style={{
					position: "absolute",
					left: "430px",
					top: "1330px",
					width: "1220px",
					marginTop: "60px",
					padding: "40px",
					backgroundColor: "rgba(250,250,250,0.3)",
					borderRadius: "20px",
					color: "white",
					textAlign: "justify",
					textShadow: "0 0 2px black",
					backdropFilter: "blur(200px)",
				}}
			>
				<p
					style={{
						position: "relative",
						left: "80px",
						fontSize: "42px",
					}}
				>
					{" "}
					Wie vermeiden wir Bias?
				</p>
				<p
					style={{
						position: "relative",
						left: "50px",
						width: "1120px",
						marginTop: "40px",
						fontSize: "34px",
					}}
				>
					Grundsätzlich sollte eine möglichst <b>große Diversität</b> in der Datensammlung angestrebt werden,
					um Bias zu vermeiden. In der Realität stehen Entwickler_innen also vor einer noch größeren Aufgabe als im
					Spiel, denn <b>nicht nur</b> müssen möglichst alle Ungleichheiten beachtet werden, in den meisten Fällen liegt
					die Anzahl der Daten im <b>Millionenbereich</b>.
				</p>
				<p
					style={{
						position: "relative",
						left: "50px",
						width: "1120px",
						marginTop: "20px",
						fontSize: "34px",
					}}
				>
					Wir haben uns für dieses Spiel auf <b>drei Fälle</b> von Bias beschränkt. Aufgrund der Vielfältigkeit des Themas Bias haben auch wir in
					unserem Datensatz sicherlich einige Ungleichheiten <b>nicht abbilden können</b>, zum Beispiel Hautfarbe, Alter
					oder Behinderungen.
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
					<img src="/emojis/thinking-face.png" style={{ width: "75px" }} />
				</p>
			</div>
            <div
                style={{
                    position: "absolute",
                    top: "2250px",
                    left: "220px",
                    display: "flex",
                    flexDirection: "row",
                    transform: "scale(1.0)",
                    WebkitTransform: "scale(1)",
                    zIndex: 1,
                }}
		    >
                <div className="scale" style={{}}>
                    <img src={"/datasets/evaluation/33.png"}
                        style={{
                            width: "130px",
                            height: "130px",
                            borderRadius: "1000px",
                            overflow: "hidden",
                            display: "flex",
                            justifyContent: "center",
                            background: "white",
                            border: "3px solid white",
                            filter: "drop-shadow(0px 0px 30px rgba(246, 223, 232, 1))",
                        }}
				    />
                </div>
            </div>
			<div
				style={{
					position: "absolute",
					left: "430px",
					top: "2060px",
					width: "1220px",
					marginTop: "60px",
					padding: "40px",
					backgroundColor: "rgba(250,250,250,0.3)",
					borderRadius: "20px",
					color: "white",
					textAlign: "justify",
					textShadow: "0px 0px 2px black",
					backdropFilter: "blur(200px)",
				}}
			>
				<p
					style={{
						position: "relative",
						left: "80px",
						fontSize: "42px",
					}}
				>
					Bias und Gesellschaft
				</p>
				<p
					style={{
						position: "relative",
						left: "50px",
						width: "1120px",
						marginTop: "40px",
						fontSize: "34px",
					}}
				>
					Du hast in diesem Spiel die <b>Rolle der Entwickler_innen</b> bei der Erstellung von Datensätzen kennengelernt.
					Darüber hinaus gilt aber auch, dass Daten in erster Linie die <b>Realität in unserer Gesellschaft</b> widerspiegeln und 
					nicht unabhängig von ihr existieren. 
					Das heißt: <b>Wir</b> als Teil der Gesellschaft, in der KI Systeme zur Anwendung kommen,
					<b> tragen auch Verantwortung</b> dafür, wie KI eingesetzt wird und mit welchen Daten diese trainiert werden kann
					und darf.
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
					<img src="/emojis/pointingUp.png" style={{ width: "75px" }} />
				</p>
			</div>
		</div>
	)
}

export default ExplanationText

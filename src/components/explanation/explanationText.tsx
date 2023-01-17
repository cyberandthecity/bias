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


interface TextProps {
    title: string
    //subtitle1: string
    paragraph1: string
    subtitle2: string
    paragraph2: string
    subtitle3: string
    paragraph3: string
    subtitle4: string
    paragraph4: string
}


//,subtitle1,paragraph1,subtitle2,paragraph2,subtitle3,paragraph3,subtitle4,paragraph4
const ExplanationText: FunctionComponent<TextProps> = ({title, paragraph1,subtitle2,paragraph2,subtitle3,paragraph3,subtitle4,paragraph4}) => {
    return (
		<div
            style={{
                position: "absolute",
                width: "912px",
                height: "182px",
                left: "445px",
                top: "500px",
                justifyContent: "center",

                fontFamily: 'Inter',
                fontStyle: "normal",
            }}
        >
            <p
                style={{
                    fontWeight: "400",
                    fontSize: "60px",
                    lineHeight: "73px",
                    textAlign: "justify",
                    color: "white",
                    marginBottom: "120px",
                }}
            >
                {title}
            </p>
            <p
                style={{
                    position: "relative",
                    width: "1250px",
                    height: "1448px",
                    fontSize: "36px",
                    lineHeight: "150%",
                    textAlign: "justify",
                    color: "white",
                }}
            > {paragraph1}

                <p
                    style={{
                        marginTop: "60px",
                    }}
                >{subtitle2}</p>
                <p
                    style={{
                        marginTop: "40px",
                    }}
                >{paragraph2}</p>
                <p
                    style={{
                        marginTop: "60px",
                    }}
                >{subtitle3}</p>
                <p
                    style={{
                        marginTop: "40px",
                    }}
                >{paragraph3}</p>
                <p
                    style={{
                        marginTop: "60px",
                    }}
                >{subtitle4}</p>
                <p
                    style={{
                        marginTop: "40px",
                    }}
                >{paragraph4}</p>
            </p>
			
			
		</div>
	)
}

export default ExplanationText
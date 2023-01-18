import React from "react"
import { FunctionComponent, useEffect, useState } from "react"
import { InterfaceColor } from "@/utils/theme"



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
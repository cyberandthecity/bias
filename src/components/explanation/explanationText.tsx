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
        <div>

		<div
            style={{
                position: "absolute",
                width: "912px",
                height: "182px",
                left: "435px",
                top: "500px",
                justifyContent: "center",

                fontFamily: 'Inter',
                fontStyle: "normal",
            }}
        >
            <p
                style={{
                    position: "relative",
                    left: "187px",
                    fontWeight: "400",
                    fontSize: "62px",
                    lineHeight: "73px",
                    textAlign: "center",
                    color: "white",
                    marginBottom: "120px",
                }}
            >
                {title}
            </p>
            <p
                style={{
                    position: "relative",
                    width: "1280px",
                    height: "1448px",
                    fontSize: "32px",
                    lineHeight: "150%",
                    textAlign: "justify",
                    color: "white",
                    fontWeight: "420",
                }}
            > {paragraph1}</p>
        </div>
        //information boxes
        <div
            style={{
                position: "relative",
                left: "460px",
                top: "900px",
                width: "1160px",
                marginTop: "60px",
                padding: "40px",
                background: InterfaceColor,
                borderRadius: "20px",
                color: "white",
                textAlign: "justify",
            }}>
            <p
                style={{
                    position: "relative",
                    left: "120px",
                    fontSize: "42px",
                }}
            >
            {subtitle2}
            </p>
            <p
                style={{
                    position: "relative",
                    marginTop: "40px",
                    width: "1100px",
                    left: "30px",
                    fontSize: "32px",
                }}
            > {paragraph2}</p>
            <img src="/images/light2.svg" style={{position:"absolute",top:"25px" ,left:"50px",width: "75px", height: "75px" }} />
        </div>
        <div
            style={{
                position: "relative",
                left: "460px",
                top: "900px",
                width: "1160px",
                marginTop: "60px",
                padding: "40px",
                background: InterfaceColor,
                borderRadius: "20px",
                color: "white",
                textAlign: "justify",
            }}>
            <p
                style={{
                    position: "relative",
                    left: "120px",
                    fontSize: "42px",
                }}
            > {subtitle3}</p>
            <p
                style={{
                    position: "relative",
                    left: "30px",
                    width: "1100px",
                    marginTop: "40px",
                    fontSize: "32px",
                }}
            > {paragraph3}</p>
            <img src="/images/how1.png" style={{position:"absolute",left:"50px",top:"25px" ,width: "80px", height: "80px" }} />
        </div>
        <div
            style={{
                position: "relative",
                left: "460px",
                top: "900px",
                width: "1160px",
                marginTop: "60px",
                padding: "40px",
                background: InterfaceColor,
                borderRadius: "20px",
                color: "white",
                textAlign: "justify",
            }}>
            <p
                style={{
                    position: "relative",
                    left: "120px",
                    fontSize: "42px",
                }}
            >{subtitle4}</p>
            <p
                style={{
                    position: "relative",
                    left: "30px",
                    width: "1100px",
                    marginTop: "40px",
                    fontSize: "32px",
                }}
            >{paragraph4}</p>
            <img src="/images/society.png" style={{position:"absolute",top:"25px",left:"50px" ,width: "80px", height: "80px" }} />
		</div>
    </div>
	)
}

export default ExplanationText
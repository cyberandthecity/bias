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
import { InterfaceColor, HighlightColor } from "@/utils/theme"
import { useNavigate } from "react-router-dom"
import "@/styles/fadeInButton.css"



interface EvalProps {
	scale?: number
	rotate?: number
	translate?: { x: number; y: number }
	toggleFullscreen: (isFullscreen: boolean) => void
}

const Eval: FunctionComponent<EvalProps> = ({
	scale = 1.0,
	rotate = 0.0,
	translate = { x: 0, y: 0 },
	toggleFullscreen,
}) => {
    let navigate = useNavigate()

    const level = useGame((state) => state.levels[state.currentLevel])
    const [showSecondComponent, setShowSecondComponent] = useState(false);
    const [showForegroundText, setShowForegroundText] = useState(false);

    const handleButtonClick = () => {
        setShowSecondComponent(true);
        setTimeout(() => {
          setShowForegroundText(true);
        }, 8000);
      };
    


	return (
        <div>
            
        //white background
        <div
        style={{
            position: "absolute",
            width: "2160px",
            height: "2586px",
            top: "1050px",
            background: "#F7F8FF",
        }}> 
        
        
        <div 
        style={{
            position: "absolute",
            width: "704px",
            height: "99px",
            left: "728px",
            top: "50px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "82px",
            lineHeight: "99px",
            color: "#4C5985",
            opacity: "0.5",
            }}>
            <p>Finaler Datensatz</p> 
        </div>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "735px",
            top: "187px",
            borderRadius: "20px",

        }} src="/datasets/gender_3x2/set03/image_1.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "988px",
            top: "187px",
            borderRadius: "20px",

        }} src="/datasets/gender_3x2/set03/image_2.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "1241px",
            top: "187px",
            borderRadius: "20px",

        }} src="/datasets/gender_3x2/set03/image_3.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "735px",
            top: "410px",
            borderRadius: "20px",

        }} src="/datasets/gender_3x2/set03/image_4.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "988px",
            top: "410px",
            borderRadius: "20px",

        }} src="/datasets/gender_3x2/set03/image_5.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "1241px",
            top: "410px",
            borderRadius: "20px",

        }} src="/datasets/gender_3x2/set03/image_0.png"></img>

        <div 
        style={{
            position: "absolute",
            width: "427px",
            height: "233px",
            left: "154px",
            top: "233px", 
            padding: "20px",
            
            /* Interface Blue */
            background: "#e4e8f3",
            borderRadius: "20px",
            fontSize: "36px",
        
        }}>
            <p> In Level 1 wurde die KI darauf trainiert, weibliche und männliche Studierende gleich gut zu erkennen. </p>
        </div>

        
        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "735px",
            top: "687px",
            borderRadius: "20px",

        }} src="/datasets/glasses_4x3/set01/image_3.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "988px",
            top: "687px",
            borderRadius: "20px",

        }} src="/datasets/glasses_4x3/set01/image_7.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "1241px",
            top: "687px",
            borderRadius: "20px",

        }} src="/datasets/glasses_4x3/set01/image_8.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "735px",
            top: "910px",
            borderRadius: "20px",

        }} src="/datasets/glasses_4x3/set01/image_9.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "988px",
            top: "910px",
            borderRadius: "20px",

        }} src="/datasets/glasses_4x3/set01/image_10.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "1241px",
            top: "910px",
            borderRadius: "20px",

        }} src="/datasets/glasses_4x3/set01/image_11.png"></img>

        <div 
        style={{
            position: "absolute",
            width: "427px",
            height: "233px",
            left: "154px",
            top: "733px", 
            padding: "20px",
            
            /* Interface Blue */
            background: "#e4e8f3",
            borderRadius: "20px",
            fontSize: "36px",
        
        }}>
            <p> In LEVEL 2 wurde die KI darauf trainiert, Studierende unabhängig von einer Brille zu erkennen. </p>
        </div>


        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "735px",
            top: "1187px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_4.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "988px",
            top: "1187px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_9.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "1241px",
            top: "1187px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_14.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "735px",
            top: "1410px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_15.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "988px",
            top: "1410px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_16.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "1241px",
            top: "1410px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_17.png"></img>

<img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "855px",
            top: "1633px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_18.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "1108px",
            top: "1633px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_19.png"></img>


        <div 
        style={{
            position: "absolute",
            width: "427px",
            height: "273px",
            left: "154px",
            top: "1233px", 
            padding: "20px",
            
            /* Interface Blue */
            background: "#e4e8f3",
            borderRadius: "20px",
            fontSize: "36px",
        
        }}>
            <p> In LEVEL 3 wurde die KI darauf trainiert, Studierende unabhängig von Hintergrund und Lichtverhältnissen zu erkennen. </p>
        </div>


        <div 
            style={{
                position: "absolute",
                width: "773px",
                height: "180px",
                left: "206px",
                top: "1933px",
                padding: "40px",
                /* Interface Blue */
                background: "#e4e8f3",
                borderRadius: "378px / 50px",
                textAlign: "center",
                fontSize: "36px",

        }}>
            <p> Dieser Datensatz repräsentiert ein paar Beispiele, um Studierende zu erkennen. Bei 20 Bildern war das schon gar nicht so einfach, oder..?  </p>
        </div>

        <div 
            style={{
                position: "absolute",
                width: "773px",
                height: "180px",
                left: "1118px",
                top: "1918px",
                padding: "40px",
                fontSize: "36px",

        }}>
        <button 
            style={{
                width: "616px",
                height: "190px",
                background: HighlightColor,
                border: "none",
                color: "black",
                padding: "15px 32px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "42px",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "40px",
            }} 
            onClick={handleButtonClick}
        >
            <p style={{color:"white",fontFamily:"Inter"}}> Zum realistischen Beispiel</p>
        
        </button>

            
        </div>
        

        </div>
        {showSecondComponent && <ImageAdder2 />}
        {showForegroundText && (
        <div
            className="fadeInButton"
            style={{
                position: "relative",
                width: "1359px",
                height: "871px",
                top: "0%",
                left: "17%",
                display: "flex",
                background: "white",
                borderRadius: "40px",
                padding: "50px",
                backgroundColor:"rgba(255,255,255,0.87)",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <p style={{fontFamily:'Inter', color:InterfaceColor,fontSize: "66px",textAlign: "center",}}> Um zu lernen, braucht eine KI VIEL MEHR Beispiele! </p>
            <p	
				style={{
						position: "absolute",
						bottom: "100px",
						height: "150px",
						width: "2000px",
						display: "flex",
						justifyContent: "center",
                        alignItems: "center",
					}}
			>
				<SelectionButton
					onClick={() => navigate("/explanation")}
					shine={true}
					background={InterfaceColor}
					color="white"
				>
				Mehr Infos
				</SelectionButton>
				<p	
					style={{
				    	position: "relative",
						left: "50px",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
				    <SelectionButton
						onClick={() => navigate("/")}
						shine={true}	
						background={InterfaceColor}
						color="white"
					>
					Neustart
					</SelectionButton>
				</p>
			</p>
        </div>
      )}

        </div>
        
			
		
	)
}
    


export default Eval
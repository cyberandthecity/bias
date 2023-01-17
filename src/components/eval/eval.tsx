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
    const level = useGame((state) => state.levels[state.currentLevel])
    const [showSecondComponent, setShowSecondComponent] = useState(false);
    const [showForegroundText, setShowForegroundText] = useState(false);

    const handleButtonClick = () => {
        setShowSecondComponent(true);
        setTimeout(() => {
          setShowForegroundText(true);
        }, 5000);
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

        }} src="/datasets/tech_5x4/set01/image_3.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "988px",
            top: "1187px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_7.png"></img>

        <img style={{
            position: "absolute",     
            width: "201px",
            height: "201px",
            left: "1241px",
            top: "1187px",
            borderRadius: "20px",

        }} src="/datasets/tech_5x4/set01/image_11.png"></img>

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
            height: "233px",
            left: "154px",
            top: "1233px", 
            padding: "20px",
            
            /* Interface Blue */
            background: "#e4e8f3",
            borderRadius: "20px",
            fontSize: "36px",
        
        }}>
            <p> In LEVEL 3 wurde die KI darauf trainiert, Studierende unabhängig vom Hintergrund zu erkennen. </p>
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
            <p> Dieser Datensatz repräsentiert ein paar Beispiele, um Studierende zu erkennen. Bei 12 Bildern war das schon gar nicht so einfach, oder..?  </p>
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
                background: "#BA90FD",
                border: "none",
                color: "black",
                padding: "15px 32px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "36px",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "40px",
            }} onClick={handleButtonClick}>Zum realistischen Beispiel</button>

            
        </div>
        

        </div>
        {showSecondComponent && <ImageAdder2 />}
        {showForegroundText && (
        <div 
        style={{
                position: "absolute",
                width: "1359px",
                height: "871px",
                left: "414px",
                top: "1075px",
                background: "#BA90FD",
                borderRadius: "40px",
                textAlign: "center",
                fontSize: "66px",
                padding: "50px",
        }}>
          <p> In der Realität, braucht KI VIEL MEHR BEISPIELE um zu lernen! </p>
        </div>
      )}

        </div>
        
			
		
	)
}
    


export default Eval
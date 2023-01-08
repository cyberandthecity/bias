import { ComplaintType } from './../components/complaint/complaint';
import { Message, MessageType } from "@/components/message/message"

export interface ComplaintPrompt {
    level1: ComplaintType[]
    level2a: ComplaintType[]
    level2b: ComplaintType[]
    level3a: ComplaintType[]
    level3b: ComplaintType[]
}


export const levelComplaints: ComplaintPrompt = {
	level1: 
		[{
		    imageUrl:"/datasets/Complaints/level1/image1.png",
            messages:[{
                id: "1",
                author: "",
                text: "Ich komm nicht rein!",
                delay: 0,
                decay: 0,
                type: MessageType.Complaint
                //typingDelay: number 
            }],
            isChatLeft: true,
        }, 
        {
		    imageUrl:"/datasets/Complaints/level1/image2.png",
            messages:[{
                id: "1",
                author: "",
                text: "Warum muss ich draußen bleiben?",
                delay: 0,
                decay: 0,
                type: MessageType.Complaint
                //typingDelay: number 
            }]
        }
		],
	
	level2a: [{
        imageUrl:"/datasets/Complaints/level2/female-glasses/image1.png",
        messages:[{
            id: "1",
            author: "",
            text: "Ich komm nicht rein!",
            delay: 0,
            decay: 0,
            type: MessageType.Complaint
            //typingDelay: number 
        }],
        isChatLeft: true
    }, 
    {
        imageUrl:"/datasets/Complaints/level2/female-glasses/image2.png",
        messages:[{
            id: "1",
            author: "",
            text: "Ich darf nicht rein!",
            delay: 0,
            decay: 0,
            type: MessageType.Complaint
            //typingDelay: number 
        }]
    }
    ],
    level2b: [{
        imageUrl:"/datasets/Complaints/level2/glasses/image1.png",
        messages:[{
            id: "1",
            author: "",
            text: "Ich komm nicht rein!",
            delay: 0,
            decay: 0,
            type: MessageType.Complaint
            //typingDelay: number 
        }],
        isChatLeft: true
    }, 
    {
        imageUrl:"/datasets/Complaints/level2/glasses/image2.png",
        messages:[{
            id: "1",
            author: "",
            text: "Ich darf nicht rein!",
            delay: 0,
            decay: 0,
            type: MessageType.Complaint
            //typingDelay: number 
        }]
    }
    ],
	level3a: [{
        imageUrl:"/datasets/Complaints/level3/background/image1.png",
        messages:[{
            id: "1",
            author: "",
            text: "Ich komm nicht rein!",
            delay: 0,
            decay: 0,
            type: MessageType.Complaint
            //typingDelay: number 
        }],
        isChatLeft: true
    }, 
    {
        imageUrl:"/datasets/Complaints/level3/background/image2.png",
        messages:[{
            id: "1",
            author: "",
            text: "Ich darf nicht rein!",
            delay: 0,
            decay: 0,
            type: MessageType.Complaint
            //typingDelay: number 
        }]
    }
    ],
    level3b: [{
        imageUrl:"/datasets/Complaints/level3/BW-back/image1.png",
        messages:[{
            id: "1",
            author: "",
            text: "Ich komm nicht rein!",
            delay: 0,
            decay: 0,
            type: MessageType.Complaint
            //typingDelay: number 
        }],
        isChatLeft: true
    }, 
    {
        imageUrl:"/datasets/Complaints/level3/BW-back/image2.png",
        messages:[{
            id: "1",
            author: "",
            text: "Ich darf nicht rein!",
            delay: 0,
            decay: 0,
            type: MessageType.Complaint
            //typingDelay: number 
        }]
    }
    ],
}

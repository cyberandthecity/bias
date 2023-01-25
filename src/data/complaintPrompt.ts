import { nanoid } from "nanoid"
import { ComplaintType } from "./../components/complaint/complaint"
import { Message, MessageType } from "@/components/message/message"

export interface ComplaintPrompt {
	nothing: ComplaintType[]
	complaintSelectedDataset_0: ComplaintType[]
	complaintSelectedDataset_1: ComplaintType[]
	complaintSelectedDataset_2: ComplaintType[]
}

export const simulationComplaints: ComplaintType[] = [
	{
		imageUrl: "/datasets/Complaints/simulation/image1.png",
		messages: [
			{
				id: nanoid(),
				author: "",
				text: "Wir kommen nicht rein!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,

				//typingDelay: number
			},
		],
		isChatLeft: false,
	},
	{
		imageUrl: "/datasets/Complaints/simulation/image2.png",
		messages: [
			{
				id: nanoid(),
				author: "",
				text: "Aber wir sind Studierende!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,

				//typingDelay: number
			},
		],
		isChatLeft: true,
	},
	{
		imageUrl: "/datasets/Complaints/simulation/image3.png",
		messages: [],
		isChatLeft: true,
	},
	{
		imageUrl: "/datasets/Complaints/simulation/image4.png",
		messages: [
			{
				id: nanoid(),
				author: "",
				text: "Wir sind im Club!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,

				//typingDelay: number
			},
		],
		isChatLeft: false,
	},
	{
		imageUrl: "/datasets/Complaints/simulation/image5.png",
		messages: [],
		isChatLeft: true,
	},
]

export const levelComplaints: ComplaintPrompt[] = [
	{
		// Level 1
		nothing: [
			{
				imageUrl: "",
				messages: [
					{
						id: "1",
						author: "",
						text: "",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
			},
		],
		complaintSelectedDataset_2: [
			{
				imageUrl: "/datasets/Complaints/thumb-up.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
				isChatLeft: true,
			},
		],
		complaintSelectedDataset_1: [
			{
				imageUrl: "/datasets/Complaints/level1/image1.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich komm nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
				isChatLeft: true,
			},
		],

		complaintSelectedDataset_0: [
			{
				imageUrl: "/datasets/Complaints/level1/image1.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich komm nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
				isChatLeft: true,
			},
			{
				imageUrl: "/datasets/Complaints/level1/image2.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Warum muss ich draußen bleiben?",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
			},
		],
	},
	{
		// Level 2
		nothing: [
			{
				imageUrl: "",
				messages: [
					{
						id: "1",
						author: "",
						text: "",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
			},
		],
		complaintSelectedDataset_0: [
			{
				imageUrl: "/datasets/Complaints/thumb-up.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
				isChatLeft: true,
			},
		],
		complaintSelectedDataset_1: [
			{
				imageUrl: "/datasets/Complaints/level2/female-glasses/image1.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich komm nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
				isChatLeft: true,
			},
			{
				imageUrl: "/datasets/Complaints/level2/female-glasses/image2.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich darf nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
			},
		],
		complaintSelectedDataset_2: [
			{
				imageUrl: "/datasets/Complaints/level2/glasses/image1.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich komm nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
				isChatLeft: true,
			},
			{
				imageUrl: "/datasets/Complaints/level2/glasses/image2.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich darf nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
			},
		],
	},
	{
		// Level 3
		nothing: [
			{
				imageUrl: "",
				messages: [
					{
						id: "1",
						author: "",
						text: "",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
			},
		],
		complaintSelectedDataset_0: [
			{
				imageUrl: "/datasets/Complaints/thumb-up.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
				isChatLeft: true,
			},
		],
		complaintSelectedDataset_1: [
			{
				// TODO!
				imageUrl: "/datasets/Complaints/level3/background/image1.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich komm nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
				isChatLeft: true,
			},
			{
				imageUrl: "/datasets/Complaints/level3/background/image2.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich darf nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
			},
		],
		complaintSelectedDataset_2: [
			{
				//TODO!
				imageUrl: "/datasets/Complaints/level3/BW-back/image1.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich komm nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
				isChatLeft: true,
			},
			{
				imageUrl: "/datasets/Complaints/level3/BW-back/image2.png",
				messages: [
					{
						id: "1",
						author: "",
						text: "Ich darf nicht rein!",
						delay: 0,
						decay: 0,
						type: MessageType.Complaint,
						//typingDelay: number
					},
				],
			},
		],
	},
]

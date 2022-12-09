import { Message, MessageType } from "@/components/message/message"

export interface AIPrompt {
	prompt: Message[]
	correctAnswer: Message[]
	wrongAnswers: Message[]
}

export const levelText: AIPrompt[] = [
	{
		// Level 1
		prompt: [
			{
				id: "1",
				author: "Die KI:",
				text: "Okay, wir sollten anfangen?",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Welcher der Datensätze repräsentiert Studierende am besten, was denkst du? ",
				delay: 2000,
				decay: 0,
				type: MessageType.Instruction,
			},
		],
		correctAnswer: [
			{
				id: "1",
				author: "Die KI:",
				text: "Super!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Jetzt werden sowohl Frauen als auch Männer als Studierende erkannt.",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		wrongAnswers: [
			{
				id: "1",
				author: "Die KI:",
				text: " Mit diesen Trainingsdaten werden Frauen [nicht/schlechter] als Studierende erkannt.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Der Datensatz sollte Frauen angemessen repräsentieren!",
				delay: 2000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
	},
	{
		// Level 2
		prompt: [
			{
				id: "1",
				author: "Die KI:",
				text: "Okay, weiter geht's!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Welcher der neuen Datensätze repräsentiert Studierende am besten, was denkst du? ",
				delay: 2000,
				decay: 0,
				type: MessageType.Instruction,
			},
		],
		correctAnswer: [
			{
				id: "1",
				author: "Die KI:",
				text: "Toll!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Jetzt werden auch Brillenträger:innen als Studierende erkannt.",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		wrongAnswers: [
			{
				id: "1",
				author: "Die KI:",
				text: "So können nur Männer mit Brillen erkannt werden.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Und es gibt weniger Trainings-Bilder mit Brillen als ohne Brillen!",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "Brillenträger werden aussortiert, sie werden nicht als Studierende erkannt!",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
	},
	{
		// Level 3
		prompt: [
			{
				id: "1",
				author: "Die KI:",
				text: "Und noch ein letztes Mal!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Welcher der Datensätze repräsentiert Studierende am besten, was denkst du? ",
				delay: 2000,
				decay: 0,
				type: MessageType.Instruction,
			},
		],
		correctAnswer: [
			{
				id: "1",
				author: "Die KI:",
				text: "Wir sind ein ganzes Stück weiter!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Verschiedene Hintergründe und Lichtverhältnisse beeinflussen die Entscheidung jetzt weniger.",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		wrongAnswers: [
			{
				id: "1",
				author: "Die KI:",
				text: "Das System hat Schwierigkeiten, Studierende [bei Nacht] vor unterschiedlichen Hintergründen zu erkennen!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
		],
	},
]

export const entranceText: Message[] = [
	{
		id: "1",
		author: "",
		text: "Okay, wir sollten anfangen?",
		delay: 0,
		decay: 0,
		type: MessageType.Instruction,
	},
]

export const explanationText: Message[] = [
	{
		id: "1",
		author: "",
		text: "",
		delay: 0,
		decay: 0,
		type: MessageType.Instruction,
	},
]

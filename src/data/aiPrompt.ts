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
				text: "Okay, lass uns anfangen.",
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
				text: "Sehr gut!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Ich habe das überprüft, jetzt werden sowohl Frauen als auch Männer als Studierende erkannt.",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "Aber das ist immer noch ausreichend, lass uns den Datensatz im nächsten Level noch etwas vergrößern.",
				delay: 2000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		wrongAnswers: [
			{
				id: "1",
				author: "Die KI:",
				text: "Ups! Ich habe das überprüft und mit diesen Trainingsdaten werden Frauen meistens nicht als Studierende erkannt. Einige von ihnen haben sich beschwert.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Der Datensatz sollte Frauen angemessen repräsentieren! Das ist nur in Datensatz 3 der Fall. Lass uns also damit weiterarbeiten.",
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
				text: "Ich habe eine neue Auswahl an Datensätzen erstellt, nachdem sich weiterhin einige Leute beschwert haben.",
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
				text: "Das scheint zu funktionieren, es werden jetzt werden auch Brillenträger:innen als Studierende erkannt.",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "Aber einige Personen beschweren sich zurecht immer noch, wir sollten hier also noch nicht aufhören. Lass uns das nochmal anschauen.",
				delay: 2000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		wrongAnswers: [
			{
				id: "1",
				author: "Die KI:",
				text: "Hm. Meine Überprüfung zeigt, dass so nur Männer mit Brillen erkannt werden können.",
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
				text: "Brillenträgerinnen werden aussortiert, sie werden nicht als Studierende erkannt!",
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
		text: "Bitte helf mir!",
		delay: 0,
		decay: 0,
		type: MessageType.Normal,
	},
]

export const explanationText: Message[] = [
	{
		id: "1",
		author: "",
		text: "Hilf mir, ich treffe falsche Entscheidungen.",
		delay: 0,
		decay: 0,
		type: MessageType.Instruction,
	},
	{
		id: "2",
		author: "",
		text: "Diese Person, darf nicht rein ",
		delay: 0,
		decay: 0,
		type: MessageType.Instruction,
	},
]

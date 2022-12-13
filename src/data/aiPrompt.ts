import { Message, MessageType } from "@/components/message/message"

export interface AIPrompt {
	prompt: Message[]
	responseSelectedDataset_0: Message[]
	responseSelectedDataset_1: Message[]
	responseSelectedDataset_2: Message[]
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
		responseSelectedDataset_0: [
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
		responseSelectedDataset_1: [
			{
				id: "1",
				author: "Die KI:",
				text: "Ups! Ich habe das überprüft und mit diesen Trainingsdaten werden Frauen nicht als Studierende erkannt. Einige von ihnen haben sich beschwert.",
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
		responseSelectedDataset_2: [
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
				text: "Aber das ist immer noch nicht genug, lass uns den Datensatz im nächsten Level noch etwas vergrößern.",
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
		responseSelectedDataset_0: [
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
				text: "Das scheint zu funktionieren, es werden jetzt auch Brillenträger:innen als Studierende erkannt.",
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
		responseSelectedDataset_1: [
			{
				id: "1",
				author: "Die KI:",
				text: "Hm. Meine Überprüfung zeigt, dass Brillenträgerinnen aussortiert und nicht als Studierende erkannt werden.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "In dem Datensatz, den du gewählt hast, kommen nur Männer mit Brillen vor.",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "Datensatz 1 wäre besser gewesen, er enthält Männer und Frauen mit Brillen. Lass uns damit weitermachen.",
				delay: 2000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_2: [
			{
				id: "1",
				author: "Die KI:",
				text: "Hm. Meine Überprüfung zeigt, dass Brillenträger:innen aussortiert und nicht als Studierende erkannt werden.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "In dem Datensatz, den du gewählt hast, kommen keine Menschen mit Brillen vor.",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "Datensatz 1 wäre besser gewesen, er enthält Männer und Frauen mit Brillen. Lass uns damit weitermachen.",
				delay: 2000,
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
				text: "Ich habe eine letzte Auswahl an Datensätzen erstellt, denn es haben sich noch immer ein paar Personen beschwert.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Welcher der Datensätze repräsentiert Studierende am besten, was denkst du?",
				delay: 2000,
				decay: 0,
				type: MessageType.Instruction,
			},
		],
		responseSelectedDataset_0: [
			{
				id: "1",
				author: "Die KI:",
				text: "Perfekt! Die Beschwerden werden immer weniger.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Und damit beeinflussen jetzt auch verschiedene Hintergründe und Lichtverhältnisse Entscheidung weniger.",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_1: [
			{
				id: "1",
				author: "Die KI:",
				text: "Hm. Ich habe das überprüft und die Beschwerden sind nicht weniger geworden.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "Die KI:",
				text: "Das System hat wohl Schwierigkeiten damit, Studierende vor unterschiedlichen Hintergründen zu erkennen!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "Die KI:",
				text: "Datensatz 1 wäre in der Hinsicht besser gewesen.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_2: [
			{
				id: "1",
				author: "Die KI:",
				text: "Hm. Ich habe das überprüft und die Beschwerden sind nicht weniger geworden.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "Die KI:",
				text: "Das System hat wohl Schwierigkeiten damit, Studierende bei Nacht zu erkennen!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "Die KI:",
				text: "Datensatz 1 wäre in der Hinsicht besser gewesen.",
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
		text: "Bitte hilf mir!",
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
		text: "Diese Person darf nicht rein!",
		delay: 0,
		decay: 0,
		type: MessageType.Instruction,
	},
]

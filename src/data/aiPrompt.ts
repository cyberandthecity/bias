import { Message, MessageType } from "@/components/message/message"
import { text } from "stream/consumers"

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
				text: "Okay, lass uns anfangen!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			// <BlinkText title={""} interval={1000} />

			{
				id: "2",
				author: "",
				text: "Welcher der Datensätze repräsentiert Studierende am besten," + "\n" +  "was denkst du? ", // TODO: show new line
				delay: 3500,
				decay: 0,
				type: MessageType.Instruction,
			},
		],
		responseSelectedDataset_0: [
			{
				id: "1",
				author: "Die KI:",
				text: "Ups! Einige Studierende haben sich beschwert.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Ich habe das überprüft und mit diesen Trainingsdaten werden Frauen nicht als Studierende erkannt.",
				delay: 5000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "Der Datensatz sollte weibliche Studierende angemessen repräsentieren!",
				delay: 7000,
				decay: 0,
				type: MessageType.Lesson,
			}, 
			{
				id: "4",
				author: "",
				text: "Dies ist nur in Datensatz 3 der Fall. Lass uns also damit weiterarbeiten.",
				delay: 8000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_1: [
			{
				id: "1",
				author: "Die KI:",
				text: "Ups! Einige Studierende haben sich beschwert.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "Die KI:",
				text: "Ich habe das überprüft und mit diesen Trainingsdaten werden Frauen meistens nicht als Studierende erkannt.",
				delay: 5000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "Der Datensatz sollte genug weibliche Studierende enthalten!",
				delay: 7000,
				decay: 0,
				type: MessageType.Lesson,
			}, 
			{
				id: "4",
				author: "",
				text: "Dies ist nur in Datensatz 3 der Fall. Lass uns also damit weiterarbeiten.",
				delay: 9000,
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
				delay: 2000,
				decay: 0,
				type: MessageType.Lesson,
			},
			{
				id: "3",
				author: "",
				text: "Aber das ist immer noch nicht genug!",
				delay: 6000,
				decay: 0,
				type: MessageType.Normal,
			},

			{
				id: "4",
				author: "",
				text: "Lass uns den Datensatz im nächsten Level noch etwas vergrößern.",
				delay: 6500,
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
				text: "Es scheinen sich weiterhin einige Leute zu beschweren!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Ich habe eine Auswahl an erweiterten Datensätzen erstellt.",
				delay: 5000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "Welcher der neuen Datensätze repräsentiert Studierende am besten, was denkst du? ",
				delay: 8000,
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
				type: MessageType.Lesson,
			},
			{
				id: "3",
				author: "",
				text: "Aber haben wir nun genug Variabilität in unserem Datensatz?",
				delay: 4000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "4",
				author: "",
				text: "Lass uns das nochmal anschauen...",
				delay: 5000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_1: [
			{
				id: "1",
				author: "Die KI:",
				text: "Hm. Diese Brillenträgerinnen haben sich beschwert!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "Die KI:",
				text: "Meine Überprüfung zeigt, dass Frauen mit Brille nicht als Studierende erkannt werden.",
				delay: 5000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "In dem Datensatz, den du gewählt hast, tragen nur Männer Brillen!",
				delay: 7000,
				decay: 0,
				type: MessageType.Lesson,
			},
			{
				id: "4",
				author: "",
				text: "Datensatz 1 wäre besser gewesen, er enthält Männer und Frauen mit Brillen.",
				delay: 9000,
				decay: 0,
				type: MessageType.Normal,
			}, 
			{
				id: "5",
				author: "",
				text: "Lass uns also damit weitermachen.",
				delay: 10000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_2: [
			{
				id: "1",
				author: "Die KI:",
				text: "Hm. Diese Brillenträger:innen haben sich beschwert!",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "Die KI:",
				text: "Meine Überprüfung zeigt, dass Menschen mit Brille nicht als Studierende erkannt werden.",
				delay: 5000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "In dem Datensatz, den du gewählt hast, kommen keine Menschen mit Brillen vor!",
				delay: 7000,
				decay: 0,
				type: MessageType.Lesson,
			},
			{
				id: "4",
				author: "",
				text: "Datensatz 1 wäre besser gewesen, er enthält Männer und Frauen mit Brillen.",
				delay: 9000,
				decay: 0,
				type: MessageType.Normal,
			}, 
			{
				id: "5",
				author: "",
				text: "Lass uns also damit weitermachen.",
				delay: 11000,
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
				text: "Uh-Oh. Es haben sich noch immer ein paar Personen beschwert.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "Die KI:",
				text: "Ich habe eine letzte Auswahl an Datensätzen erstellt, um das Problem anzugehen.",
				delay: 5000,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "3",
				author: "",
				text: "Du kennst es schon: Welcher der Datensätze repräsentiert Studierende am besten, was denkst du?",
				delay: 7000,
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
				text: "Und damit beeinflussen jetzt auch verschiedene Hintergründe und Lichtverhältnisse die Entscheidung der KI weniger.",
				delay: 3000,
				decay: 0,
				type: MessageType.Lesson,
			},
		],
		responseSelectedDataset_1: [
			{
				id: "1",
				author: "Die KI:",
				text: "Hm. Die Beschwerden sind nicht weniger geworden.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Das System hat wohl Schwierigkeiten damit, Studierende vor unterschiedlichen Hintergründen zu erkennen!",
				delay: 5000,
				decay: 0,
				type: MessageType.Lesson,
			},
			{
				id: "3",
				author: "",
				text: "Datensatz 1 wäre in der Hinsicht besser gewesen.",
				delay: 8000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_2: [
			{
				id: "1",
				author: "Die KI:",
				text: "Hm. Die Beschwerden sind nicht weniger geworden.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: "2",
				author: "",
				text: "Das System hat wohl Schwierigkeiten damit, Studierende bei Nacht vor verschiedenen Hintergründen zu erkennen!",
				delay: 5000,
				decay: 0,
				type: MessageType.Lesson,
			},
			{
				id: "3",
				author: "",
				text: "Datensatz 1 wäre in der Hinsicht besser gewesen.",
				delay: 8000,
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
		text: "Unsere Einlasskontrolle ist jetzt automatisiert!",
		delay: 0,
		decay: 0,
		type: MessageType.Normal,
	},
	{
		id: "2",
		author: "",
		text: "Aber einige Leute beschweren sich, scheinbar funktioniert irgendetwas noch nicht richtig. Kannst Du mir helfen?",
		delay: 2000,
		decay: 0,
		type: MessageType.Normal,
	},
]

export const explanationText: Message[] = [
	{
		id: "1",
		author: "",
		text: "Hm, eigentlich sind das alles Studierende. Ich treffe zu viele falsche Entscheidungen, das muss an den Daten liegen.",
		delay: 1000,
		decay: 0,
		type: MessageType.Lesson,
	},
	{
		id: "2",
		author: "",
		text: "Ich glaube, wir müssen meinen Datensatz neu aufbauen, es wäre super, wenn du mir dabei helfen könntest.",
		delay: 6000,
		decay: 0,
		type: MessageType.Instruction,
	},
	{
		id: "3",
		author: "",
		text: "Aber nicht vergessen: Studierende sind eine sehr diverse Gruppe - es ist wichtig, das in den Daten zu repräsentieren!",
		delay: 10000,
		decay: 0,
		type: MessageType.Instruction,
	},
	{
		id: "4",
		author: "",
		text: "Bist du bereit mir zu helfen?",
		delay: 14000,
		decay: 0,
		type: MessageType.Lesson,
	},
]

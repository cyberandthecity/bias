import { Message, MessageType } from "@/components/message/message"
import { nanoid } from "nanoid"
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
				id: nanoid(),
				author: "Die KI:",
				text: "Okay, lass uns anfangen!",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
			/*{
				id: nanoid(),
				author: "",
				text: "Hier ist eine Auswahl an möglichen Beispielen. Man nennt das Datensätze.",
				delay: 2000,
				decay: 0,
				type: MessageType.Normal,
			},*/
			// <BlinkText title={""} interval={1000} />

			{
				id: nanoid(),
				author: "",
				text: "Was denkst du: Welcher der Datensätze repräsentiert Studierende am besten? ", // TODO: show new line
				delay: 2200,
				decay: 0,
				type: MessageType.Instruction,
				emoji: "🤔",
			},

			{
				id: nanoid(),
				author: "",
				text: "Und denke daran: Studierende sind eine sehr diverse Gruppe.", 
				delay: 1500,
				decay: 0,
				type: MessageType.Instruction,
				emoji: "❕",
			},
			
		],
		responseSelectedDataset_0: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Ups!",
				delay: 500,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Studentinnen haben sich beschwert. Sie werden nicht als Studierende erkannt.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Der Datensatz sollte weibliche Studierende angemessen repräsentieren!",
				delay: 1500,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "💡",
			},
			{
				id: nanoid(),
				author: "",
				text: "Das ist nur in Datensatz 3 der Fall. Lass uns also damit weiterarbeiten.",
				delay: 1500,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_1: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Ups!",
				delay: 500,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Einige Studentinnen haben sich beschwert. Sie werden nicht als Studierende erkannt.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Der Datensatz sollte genug weibliche Studierende enthalten!",
				delay: 1500,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "💡",
			},
			{
				id: nanoid(),
				author: "",
				text: "Dies ist nur in Datensatz 3 der Fall. Lass uns also damit weiterarbeiten.",
				delay: 1500,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_2: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Sehr gut!",
				delay: 500,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Ich habe das überprüft, jetzt werden sowohl Frauen als auch Männer als Studierende erkannt.",
				delay: 2000,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "💡",
			},
			{
				id: nanoid(),
				author: "",
				text: "Das war schonmal gut, aber lass uns nochmal reinschauen.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			}
			/*{
				id: nanoid(),
				author: "",
				text: "Aber ich brauche noch mehr Beispiele!",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},

			{
				id: nanoid(),
				author: "",
				text: "Lass uns den Datensatz im nächsten Level etwas vergrößern.",
				delay: 1500,
				decay: 0,
				type: MessageType.Normal,
			},*/
		],
	},
	{
		// Level 2
		prompt: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Es scheinen sich weiterhin einige Leute zu beschweren!",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Ich habe eine Auswahl an erweiterten Datensätzen erstellt.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Was denkst du: Welcher der erweiterten Datensätze repräsentiert Studierende am besten?",
				delay: 2000,
				decay: 0,
				type: MessageType.Instruction,
				emoji: "🤔",
			},
		],
		responseSelectedDataset_0: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Toll!",
				delay: 500,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Das scheint zu funktionieren, es werden jetzt auch Brillenträger:innen als Studierende erkannt.",
				delay: 2000,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "💡",
			},
			{
				id: nanoid(),
				author: "",
				text: "Aber haben wir nun genug Diversität in unserem Datensatz?",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Lass uns das nochmal anschauen...",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_1: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Hm. Diese Brillenträgerinnen haben sich beschwert!",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			
			{
				id: nanoid(),
				author: "",
				text: "In dem Datensatz, den du gewählt hast, tragen nur Männer Brillen!",
				delay: 1500,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "💡",
			},
			{
				id: nanoid(),
				author: "",
				text: "Datensatz 1 wäre besser gewesen, er enthält Männer und Frauen mit Brillen.",
				delay: 1500,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Lass uns also damit weitermachen.",
				delay: 1000,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_2: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Hm. Diese Brillenträger:innen haben sich beschwert!",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			
			{
				id: nanoid(),
				author: "",
				text: "In dem Datensatz, den du gewählt hast, kommen keine Menschen mit Brillen vor!",
				delay: 1500,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "💡",
			},
			{
				id: nanoid(),
				author: "",
				text: "Datensatz 1 wäre besser gewesen, er enthält Männer und Frauen mit Brillen.",
				delay: 1500,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Lass uns also damit weitermachen.",
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
				id: nanoid(),
				author: "Die KI:",
				text: "Es haben sich noch immer ein paar Personen beschwert.",
				delay: 1500,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Ich habe eine letzte Auswahl an Datensätzen erstellt.",
				delay: 1500,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Was denkst du: Welcher der Datensätze repräsentiert Studierende am besten?",
				delay: 2000,
				decay: 0,
				type: MessageType.Instruction,
				emoji: "🤔",
			},
		],
		responseSelectedDataset_0: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Perfekt! Die Beschwerden werden immer weniger.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Hintergründe und Lichtverhältnisse beeinflussen die Entscheidung der KI kaum noch.",
				delay: 1000,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "💡",
			},
		],
		responseSelectedDataset_1: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Uh-Oh. Die Beschwerden sind nicht weniger geworden.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Das System hat wohl Schwierigkeiten damit, Studierende vor unterschiedlichen Hintergründen zu erkennen!",
				delay: 1800,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "💡",
			},
			{
				id: nanoid(),
				author: "",
				text: "Datensatz 1 wäre in dieser Hinsicht besser gewesen.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
		],
		responseSelectedDataset_2: [
			{
				id: nanoid(),
				author: "Die KI:",
				text: "Uh-Oh. Die Beschwerden sind nicht weniger geworden.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Das System hat wohl Schwierigkeiten damit, Studierende bei Nacht vor verschiedenen Hintergründen zu erkennen!",
				delay: 1800,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "💡",
			},
			{
				id: nanoid(),
				author: "",
				text: "Datensatz 1 wäre in der Hinsicht besser gewesen.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
		],
	},
]

export const entranceText: Message[] = [
	{
		id: nanoid(),
		author: "",
		text: "Unsere Einlasskontrolle ist jetzt automatisiert!",
		delay: 1500,
		decay: 0,
		type: MessageType.Normal,
	},
	{
		id: nanoid(),
		author: "",
		text: "Aber einige Leute beschweren sich. Scheinbar funktioniert es noch nicht richtig.",
		delay: 1500,
		decay: 0,
		type: MessageType.Normal,
		emoji: "🤔",  //😵‍💫
	},
	{
		id: nanoid(),
		author: "",
		text: "Kannst Du mir helfen?",
		delay: 1000,
		decay: 0,
		type: MessageType.Normal,
		emoji: "❕", //⁉📌
	},
]

export const explanationText: Message[] = [
	{
		id: nanoid(),
		author: "",
		text: "Hm, ich kann Studierende noch nicht erkennen.",
		delay: 1500,
		decay: 0,
		type: MessageType.Normal,
	},
	{
		id: nanoid(),
		author: "",
		text: "Ich brauche Beispiele von Studierenden, um das zu lernen.",
		delay: 1800,
		decay: 0,
		type: MessageType.Instruction,
		emoji: "❕",
	},
	{
		id: nanoid(),
		author: "",
		text: "Kannst du mir Beispiele geben?",
		delay: 1500,
		decay: 0,
		type: MessageType.Normal,
	},

]

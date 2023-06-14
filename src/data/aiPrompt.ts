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
				emoji: "thinking-face",
			},

			{
				id: nanoid(),
				author: "",
				text: "Und denke daran: Studierende sind eine sehr diverse Gruppe.",
				delay: 1500,
				decay: 0,
				type: MessageType.Instruction,
				emoji: "exclamation-mark",
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
				delay: 1500,
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
				emoji: "light-bulb",
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
				delay: 1500,
				decay: 0,
				type: MessageType.Normal,
			},
			{
				id: nanoid(),
				author: "",
				text: "Der Datensatz sollte genug weibliche Studierende enthalten!",
				delay: 1200,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "light-bulb",
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
				text: "Jetzt werden sowohl Frauen als auch Männer als Studierende erkannt.",
				delay: 2000,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "light-bulb",
			},
			{
				id: nanoid(),
				author: "",
				text: "Das war schonmal gut, aber lass uns nochmal reinschauen.",
				delay: 1200,
				decay: 0,
				type: MessageType.Normal,
			},
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
				emoji: "thinking-face",
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
				text: "Das scheint zu funktionieren, es werden jetzt auch Brillenträger_innen als Studierende erkannt.",
				delay: 2000,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "light-bulb",
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
				emoji: "light-bulb",
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
				text: "Hm. Diese Brillenträger_innen haben sich beschwert!",
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
				emoji: "light-bulb",
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
				emoji: "thinking-face",
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
				emoji: "light-bulb",
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
				text: "Studierende werden mit anderen Lichtverhältnissen und Hintergründen nicht erkannt!",
				delay: 1800,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "light-bulb",
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
				text: "Studierende werden bei Nacht vor verschiedenen Hintergründen nicht erkannt!",
				delay: 1800,
				decay: 0,
				type: MessageType.Lesson,
				emoji: "light-bulb",
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
		text: "Hey, ich bin die KI Einlasskontrolle.",
		delay: 1500,
		decay: 0,
		type: MessageType.Normal,
		//emoji: "alien",
	},
	{
		id: nanoid(),
		author: "",
		text: "Aber einige Leute beschweren sich. Scheinbar funktioniert es noch nicht richtig.",
		delay: 2000,
		decay: 0,
		type: MessageType.Normal,
		emoji: "thinking-face",
	},
	{
		id: nanoid(),
		author: "",
		text: "Kannst Du mir helfen?",
		delay: 1000,
		decay: 0,
		type: MessageType.Normal,
		emoji: "exclamation-mark",
	},
]

export const explanationText: Message[][] = [
	[
		{
			id: nanoid(),
			author: "",
			text: "Die Einlasskontrolle im Club für Studierende ist jetzt automatisiert!",
			delay: 2000,
			decay: 0,
			type: MessageType.Normal,
		},
		{
			id: nanoid(),
			author: "",
			text: "Doch irgendwas mache ich falsch.",
			delay: 1500,
			decay: 0,
			type: MessageType.Normal,
		},
		{
			id: nanoid(),
			author: "",
			text: "Ich lasse nicht alle Studierenden in das Clubhaus.",
			delay: 5000,
			decay: 0,
			type: MessageType.Normal,
			emoji: "exclamation-mark",
		},
		/*{
			id: nanoid(),
			author: "",
			text: "Lass uns schauen, wie es vor dem Club aussieht...",
			delay: 5000,
			decay: 0,
			type: MessageType.Normal,
		},*/
	],
	[
		{
			id: nanoid(),
			author: "",
			text: "Lass uns schauen, wie es vor dem Club aussieht...", //"Simuliere Tübingen ...",
			delay: 5000,
			decay: 0,
			type: MessageType.Normal,
		},
	],
	[
		{
			id: nanoid(),
			author: "",
			text: "Hm, ich kann Studierende noch nicht gut genug erkennen.", //"Hm, ich kann noch nicht alle Studierenden erkennen.",
			delay: 1500,
			decay: 0,
			type: MessageType.Normal,
		},
		{
			id: nanoid(),
			author: "",
			text: "Ich brauche viele Beispiele von Studierenden, um das zu lernen.",
			delay: 1800,
			decay: 0,
			type: MessageType.Instruction,
			emoji: "light-bulb",
		},
		{
			id: nanoid(),
			author: "",
			text: "Kannst du mir helfen, die richtigen Beispiele auszuwählen?",
			delay: 1500,
			decay: 0,
			type: MessageType.Normal,
		},
	],
]

export const evaluationText: Message[] = [
	{
		id: nanoid(),
		author: "Die KI:",
		text: "Gemeinsam haben wir einen guten Datensatz gefunden!",
		delay: 1500,
		decay: 0,
		type: MessageType.Normal,
		//emoji: "thinking-face",
	},
	{
		id: nanoid(),
		author: "",
		text: "Lass uns die Ergebnisse nochmal anschauen...",
		delay: 3000,
		decay: 0,
		type: MessageType.Normal,
		//emoji: "alien",
	},
]

export const additionalText: Message[] = [
	{
		id: nanoid(),
		author: "Die KI:",
		//text: "Durch unser Spiel hast Du bereits erste Erfahrungen damit gemacht, wie schwer es ist, Bias in einer KI zu verhindern. ",
		text: "In diesem Spiel hast Du Trainings-Daten für die KI ausgewählt. Ganz ähnlich, wie das richtige Entwickler_innen tun.",
		delay: 2000,
		decay: 0,
		type: MessageType.Explanation,
	},

	{
		id: nanoid(),
		author: "",
		text: "Und Du hast wahrscheinlich gemerkt: Es ist gar nicht so einfach, Bias in einer KI zu verhindern!",
		delay: 2000,
		decay: 0,
		type: MessageType.Explanation,
	},
]

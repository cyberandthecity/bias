import { Message, MessageType } from "@/components/message/message"

export interface HintPrompt {
	hint: Message[]
}

export const levelHint: HintPrompt[] = [
	{
		// Level 1
		hint: [
			{
				id: "1",
				author: "Tipp:",
				text: "Versuche auf die Verteilung der Geschlechter zu achten. Was wäre ein sinnvolles Verhältnis, um die Realität abzubilden?",
				delay: 0,
				decay: 0,
				type: MessageType.Hint,
			},
		],
	},
	{
		// Level 2
		hint: [
			{
				id: "2",
				author: "Tipp:",
				text: "Versuch doch mal darauf zu achten, dass in deinem gewählten Datensatz auch Menschen mit Brillen vorkommen. Und nicht vergessen auf die Verteilung aus dem vorherigen Datensatz zu achten!",
				delay: 0,
				decay: 0,
				type: MessageType.Hint,
			},
		],
	},
	{
		// Level 3
		hint: [
			{
				id: "3",
				author: "Tipp:",
				text: "Auch Eigenschaften die für uns keine Rolle für die Zuordnung von Studenten spielen, können von der KI als Kriterium erkannt werden. Schau dir nochmal die Hintergründe an.",
				delay: 0,
				decay: 0,
				type: MessageType.Hint,
			},
		],
	},
]

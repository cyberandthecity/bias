import { Message, MessageType } from "@/components/message/message"

export interface HintPrompt {
	hint: Message[]
}

export const levelText: HintPrompt[] = [
	{
        // Level 1
		hint: [
			{
				id: "1",
				author: "Der Tipp",
				text: "Versuche auf die Verteilung der Geschlechter zu achten.",
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
				author: "Der Tipp",
				text: "Versuche darauf zu achten ob in deinem gewählten Datensatz auch Menschen mit Sehhilfen vorkommen.",
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
				author: "Der Tipp",
				text: "Auch Eigenschaften die für uns keine Rolle für die Zuordnung von Studenten spielen, können von der KI als Kriterium erkannt werden. Versuche auf die Hintergründe zu achten.",
				delay: 0,
				decay: 0,
				type: MessageType.Hint,
			},			
		],
    }       
]
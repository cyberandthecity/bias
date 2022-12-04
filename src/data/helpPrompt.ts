import { Message, MessageType } from "@/components/message/message"

export interface HelpPrompt {
	prompt: Message[]
}

export const levelText: HelpPrompt[] = [
	{
        // Level 1
		prompt: [
			{
				id: "1",
				author: "Der Tipp",
				text: "Versuche auf die Verteilung der Geschlechter zu achten.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
                // TODO: Change MessageType + Add a new messageType tp message.tsx
			},			
		],
    },
    {
        // Level 2
		prompt: [
			{
				id: "2",
				author: "Der Tipp",
				text: "Versuche darauf zu achten ob in deinem gewählten Datensatz auch Menschen mit Sehhilfen vorkommen.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},			
		],
    },
    {
        // Level 3
		prompt: [
			{
				id: "3",
				author: "Der Tipp",
				text: "Auch Eigenschaften die für uns keine Rolle für die Zuordnung von Studenten spielen, können von der KI als Kriterium erkannt werden. Versuche auf die Hintergründe zu achten.",
				delay: 0,
				decay: 0,
				type: MessageType.Normal,
			},			
		],
    }       
]
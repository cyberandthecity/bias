import { ComplaintType } from "@/components/complaint/complaint"
import { Message } from "@/components/message/message"
import { AIPrompt, levelText, entranceText, explanationText } from "@/data/aiPrompt"
import { ComplaintPrompt, levelComplaints } from "@/data/complaintPrompt"
import { HintPrompt, levelHint } from "@/data/hintPrompt"
import { Group } from "three"
import create from "zustand"
import { immerStore } from "./immerStore"

interface Actions {
	progressLevel(): void
	datasetsForLevel(level: Level): Dataset[]
	resetLevel(): void
}
export interface Dataset {
	title: string
	images: string[][]
}
export interface Level {
	title: string
	imageDir: string
	correctDataset: number
	dimension: [row: number, column: number]
	aiPrompt: AIPrompt
	hintPrompt: HintPrompt
	complaints: ComplaintPrompt
}

export interface EntranceInfo {
	aiMessages: Message[]
}

export interface ExplanationInfo {
	aiMessages: Message[]
}

type Store = {
	entranceInfo: EntranceInfo
	explanationInfo: ExplanationInfo
	levels: Level[]
	currentLevel: number
	actions: Actions
}

export const useGame = create<Store>(
	immerStore((set, get) => ({
		entranceInfo: {
			aiMessages: entranceText,
		},
		explanationInfo: {
			aiMessages: explanationText,
		},
		levels: [
			{
				title: "Datenselektion 1",
				imageDir: "gender_3x2",
				correctDataset: 2,
				dimension: [2, 3],
				aiPrompt: levelText[0],
				hintPrompt: levelHint[0],
				complaints: levelComplaints[0],
			},
			{
				title: "Datenselektion 2",
				imageDir: "glasses_4x3",
				correctDataset: 0,
				dimension: [3, 4],
				aiPrompt: levelText[1],
				hintPrompt: levelHint[1],
				complaints: levelComplaints[1], 
			},
			{
				title: "Datenselektion 3",
				imageDir: "tech_5x4",
				correctDataset: 0,
				dimension: [4, 5],
				aiPrompt: levelText[2],
				hintPrompt: levelHint[2],
				complaints: levelComplaints[2],
			},
		],
		currentLevel: 0,
		actions: {
			progressLevel() {
				set((state) => {
					state.currentLevel += 1
				})
			},
			resetLevel() {
				set((state) => {
					state.currentLevel = 0
				})
			},
			datasetsForLevel(level: Level) {
				const datasets: Dataset[] = []

				for (let i = 0; i < 3; i++) {
					let images: string[][] = []
					for (let row = 0; row < level.dimension[0]; row++) {
						for (let column = 0; column < level.dimension[1]; column++) {
							if (!images[row]) images[row] = []
							images[row][column] = `/datasets/${level.imageDir}/set0${i + 1}/image_${
								row * level.dimension[1] + column
							}.png`
						}
					}
					datasets.push({
						title: `Datensatz ${i + 1}`,
						images: images,
					})
				}
				return datasets
			},
		},
	}))
)

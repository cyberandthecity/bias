import { Group } from "three"
import create from "zustand"
import { immerStore } from "./immerStore"

interface Actions {
	progressLevel(): void
	datasetsForLevel(level: Level): Dataset[]
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
}

type Store = {
	levels: Level[]
	currentLevel: number
	actions: Actions
}

export const useGame = create<Store>(
	immerStore((set, get) => ({
		levels: [
			{
				title: "Datenselektion 1",
				imageDir: "gender_2x2",
				correctDataset: 0,
				dimension: [2, 2],
			},
			{
				title: "Datenselektion 2",
				imageDir: "glasses_3x3",
				correctDataset: 0,
				dimension: [3, 3],
			},
		],
		currentLevel: 0,
		actions: {
			progressLevel() {
				set((state) => {
					state.currentLevel += 1
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

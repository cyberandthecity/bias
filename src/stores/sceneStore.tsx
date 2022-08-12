import { Group } from "three"
import create from "zustand"
import { immerStore } from "./immerStore"

interface Actions {
	setLeftHandTarget(target: Group | null): void
	setGrabbedLeft(grabbed: boolean): void

	setRightHandTarget(target: Group | null): void
	setGrabbedRight(grabbed: boolean): void
}

type Store = {
	leftHandTarget: Group | null
	grabbedLeft: boolean

	rightHandTarget: Group | null
	grabbedRight: boolean

	actions: Actions
}

export const useScene = create<Store>(
	immerStore((set, get) => ({
		leftHandTarget: null,
		grabbedLeft: false,

		rightHandTarget: null,
		grabbedRight: false,

		actions: {
			setLeftHandTarget(target) {
				set((state) => {
					state.leftHandTarget = target
				})
			},

			setGrabbedLeft(grabbed) {
				set((state) => {
					state.grabbedLeft = grabbed
				})
			},

			setGrabbedRight(grabbed) {
				set((state) => {
					state.grabbedRight = grabbed
				})
			},

			setRightHandTarget(target) {
				set((state) => {
					state.rightHandTarget = target
				})
			},
		},
	}))
)

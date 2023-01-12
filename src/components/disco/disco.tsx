import AI from "@/components/ai/ai"
import Background from "@/components/background/background"
import Fullscreen from "@/components/fullscreen/fullscreen"
import Restart from "@/components/restart/restart"
import ClubScene from "@/components/scenes/clubScene"
import Simulation from "@/components/simulation/simulation"
import Title from "@/components/title/title"
import { useGame } from "@/stores/gameStore"
import { FunctionComponent, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface FloorTile {
	color: string
}

interface DiscoProps {
	cellWidth?: number
	cellHeight?: number
	widthSegments?: number
	heightSegments?: number
	spacing?: number
}

const DiscoFloorColors = ["#FF0000", "#FF7F00", "#FFFF00"]

const Disco: FunctionComponent<DiscoProps> = ({
	cellWidth = 100,
	cellHeight = 100,
	widthSegments = 6,
	heightSegments = 4,
	spacing = 20,
}) => {
	const [floorTiles, setFloorTiles] = useState<FloorTile[][]>([])

	useEffect(() => {
		const tiles: FloorTile[][] = []
		for (let i = 0; i < heightSegments; i++) {
			tiles.push([])
			for (let j = 0; j < widthSegments; j++) {
				tiles[i].push({
					color: DiscoFloorColors[Math.floor(Math.random() * DiscoFloorColors.length)],
				})
			}
		}
		setFloorTiles(tiles)
	}, [])

	return (
		<div
			style={{
				position: "relative",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				paddingLeft: spacing,
				paddingTop: spacing,

				gap: spacing,
			}}
		>
			{floorTiles.map((row, i) => {
				return (
					<div style={{ display: "flex", flexDirection: "row", gap: spacing }}>
						{row.map((tile, j) => {
							return (
								<div
									style={{
										width: cellWidth,
										height: cellHeight,
										backgroundColor: tile.color,
										borderRadius: 10,
										opacity: 0.5,
									}}
								/>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default Disco

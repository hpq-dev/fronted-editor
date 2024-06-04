import { Color, Vector2, Image, strokeProp } from "."
import { effectProps } from "./effects"

export interface nodeProps {
    name: string
    width: number
    height: number
    background: Color | Image
    position: Vector2
    rounded: number
    rotate: number
    stroke: strokeProp[]
    effects: effectProps[]
}

export interface MultyNodesTypes {
    node: nodeProps
    children?: nodeProps[]
}

export type nodesType = MultyNodesTypes[]
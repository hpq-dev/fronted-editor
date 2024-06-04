import { Color, Vector2 } from "."

export type effectTypes = 'inner' | 'drop' | 'layer' | 'background'

export type effectProps = {
    type: effectTypes
} & (innerEffectProps | dropEffectProps | layerEffectProps | backgroundEffectProps)

export interface innerEffectProps {
    position: Vector2
    blur: number
    spread: number
    color: Color
}

export interface dropEffectProps {
    position: Vector2
    blur: number
    spread: number
    color: Color
}

export interface layerEffectProps {
    blur: number
}

export interface backgroundEffectProps {
    blur: number
}

export type strokeTypes = 'solid' | 'dashed'
export type strokePosition = 'inside' | 'cener' | 'outside'

export type strokeProp = {
    color: Color
    lineWidth: number
    type: strokeTypes
    position: strokePosition
}
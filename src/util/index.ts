import { Color, Vector2 } from "@/types"
const util = {
    Vector2: (x: number, y: number): Vector2 => ({
        x, y
    }),

    RGBA: ([red, blue, green, opacity]: Color): string =>
        `rgba(${red}, ${blue}, ${green}, ${opacity})`,

}

export default util
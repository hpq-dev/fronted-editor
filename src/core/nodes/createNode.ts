import { addNode } from "@/hooks/nodes"
import util from "@/util"


const createNode = (dispatch: any, layouts: number[]) => {
    dispatch(addNode([layouts, {
        name: 'gamemodehpq123',
        background: [255, 0, 0, 255],
        width: 255,
        height: 255,
        position: util.Vector2(55, 5),
        rounded: 0,
        rotate: 0,
        stroke: [],
        effects: []
    }]))
}

export default createNode
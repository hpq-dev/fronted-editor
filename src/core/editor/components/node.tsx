import { MultyNodesTypes } from "@/types/node"
import util from "@/util"

interface props extends MultyNodesTypes {

}

const NodeItem = ({ node }: props) => {
    const { width, height, background } = node

    const bg = typeof background === 'string' ? background : util.RGBA(background)
 //transition: opacity 50ms ease-out 0s; -webkit-font-smoothing: antialiased; position: fixed; 
 //display: block; transform-origin: left top;
 // will-change: transform; isolation: isolate; contain: layout style;
    return <div
        className="relative"
        style={{
            background: bg,
            width,
            height,
        }}
    >
        Gamemodehpq123
    </div>
}

export default NodeItem
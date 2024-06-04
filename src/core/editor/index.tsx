import { RootState } from "@/hooks"
import { useSelector } from "react-redux"
import NodeItem from "./components/node"
import EditorController from "./controller"
import CreateNode from "./tools/createNode"

const Editor = () => {
    const { items } = useSelector((state: RootState) => state.nodes)
    const { position, scale } = useSelector((state: RootState) => state.controller)

    return <div className="fixed left-0 top-0 w-full h-[100vh]">
        <div
            style={{
                transform: `scale(${scale}) translateX(${-position.x}px) translateY(${-position.y}px)`,
                WebkitFontSmoothing: 'antialiased',
                display: 'block',
                transformOrigin: 'left top',
                willChange: 'transform',
                isolation: 'isolate',
                contain: 'layout style'
            }}
        >
            {items.map((props, i) => <NodeItem
                key={i}
                {...props}
            />)}
        </div>
        <EditorController />
        <CreateNode />
    </div>
}

export default Editor
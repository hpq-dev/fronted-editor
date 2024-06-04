

import { RootState } from "@/hooks"
import { setScale } from "@/hooks/controller"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { zoomProps } from "."

const EditorControllerMouse = ({ zoomDispatch }: zoomProps) => {
    const { scale, position } = useSelector((state: RootState) => state.controller)

    useEffect(() => {
        const handler = ({ ctrlKey, deltaY, altKey }: WheelEvent) => {
            if (!ctrlKey && !altKey)
                return

            if (Math.abs(deltaY) < 100)
                return

            const chunkValue = (deltaY / (ctrlKey ? 3000 : 1000))

            const newZoom: number = scale - chunkValue
            zoomDispatch(position, newZoom, chunkValue)
        }

        document.addEventListener('wheel', handler)
        return () => document.removeEventListener('wheel', handler)
    }, [scale, position])

    return null
}

export default EditorControllerMouse
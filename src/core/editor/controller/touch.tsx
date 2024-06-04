
import { RootState } from "@/hooks"
import { setPosition, setScale } from "@/hooks/controller"
import util from "@/util"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { zoomProps } from "."

const EditorControllerTouch = ({ zoomDispatch }: zoomProps) => {
    const { position, scale } = useSelector((state: RootState) => state.controller)

    const ref = useRef<HTMLDivElement | null>(null)
    const dispatch = useDispatch()

    useEffect(() => {
        const parent = ref.current
        if (!parent)
            return

        const handlerMove = ({ deltaX, deltaY, shiftKey, ctrlKey, altKey }: WheelEvent) => {
            if (ctrlKey || altKey)
                return

            const { x, y } = position

            const dX: number = deltaX / scale
            const dY: number = deltaY / scale

            dispatch(setPosition(
                !shiftKey ?
                    util.Vector2(x + dX, y + dY) :
                    util.Vector2(x + dY, y + dX)
            ))
        }

        parent.addEventListener('wheel', handlerMove, { passive: false })
        return () => parent.removeEventListener('wheel', handlerMove)
    }, [ref, position, scale])

    useEffect(() => {
        const handler = (e: WheelEvent) => {
            e.preventDefault()

            const degists = (e.deltaY + '').replace('.', '').length // here detect if deltaY have more much two degist that before

            if (degists < 6)
                return

            const chunkValue = (e.deltaY / 100)
            const newZoom = scale - chunkValue
            zoomDispatch(position, newZoom, chunkValue)
        }

        window.addEventListener('wheel', handler, { passive: false })
        return () => window.removeEventListener('wheel', handler)
    }, [scale, position])

    return <div
        ref={ref}
        className="absolute left-0 top-0 inset-0 bg-transparent overflow-hidden touch-none"
    />
}

export default EditorControllerTouch
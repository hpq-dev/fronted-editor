import { useCallback, useEffect, useState } from "react"
import EditorControllerTouch from "./touch"
import EditorControllerMouse from "./mouse"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/hooks"
import { setPosition, setScale } from "@/hooks/controller"
import { Vector2 } from "@/types"
import util from "@/util"

const MIN_SCALE_VALUE: number = 0.3
const MAX_SCALE_VALUE: number = 10.0

export interface zoomProps {
    zoomDispatch: (position: Vector2, value: number, chunkValue: number) => void
}

const EditorController = () => {
    const [mouse, setMouse] = useState<Vector2>(util.Vector2(0, 0))

    const { scale } = useSelector((state: RootState) => state.controller)
    const dispatch = useDispatch()

    useEffect(() => {
        if (scale < MIN_SCALE_VALUE)
            dispatch(setScale(MIN_SCALE_VALUE))

        else if (scale > MAX_SCALE_VALUE)
            dispatch(setScale(MAX_SCALE_VALUE))

    }, [scale])

    const zoomDispatch = (mapPosition: Vector2, zoomValue: number, chunkFactor: number) => {
        // Obține dimensiunile și coordonatele centrului viewport-ului
        const viewportWidth =  window.innerWidth/* lățimea viewport-ului */;
        const viewportHeight = window.innerHeight /* înălțimea viewport-ului */;
        const viewportCenterX = viewportWidth / 15;
        const viewportCenterY = viewportHeight / 15;

        // Calculează diferența dintre coordonatele mouse-ului și centrul viewport-ului
        const deltaX = (mouse.x - viewportCenterX) * chunkFactor;
        const deltaY = (mouse.y - viewportCenterY) * chunkFactor;

        // Aplică diferența la poziția curentă a hărții în funcție de zoomValue
        const newX = mapPosition.x - deltaX / zoomValue;
        const newY = mapPosition.y - deltaY / zoomValue;
        const newPosition = util.Vector2(newX, newY);

        // Actualizează poziția și scala hărții
        dispatch(setPosition(newPosition));
        dispatch(setScale(zoomValue));
    };



    useEffect(() => {
        const handler = ({ clientX, clientY }: MouseEvent) => {
            setMouse(util.Vector2(clientX, clientY))
        }

        document.addEventListener('mousemove', handler)
        return () => document.removeEventListener('mousemove', handler)
    }, [])

    return <>
        <EditorControllerTouch
            zoomDispatch={zoomDispatch}
        />
        <EditorControllerMouse
            zoomDispatch={zoomDispatch}
        />
    </>
}

export default EditorController
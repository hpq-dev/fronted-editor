import { RootState } from "@/hooks"
import { Vector2 } from "@/types"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"


const CreateNode = () => {
    const [active, setActive] = useState<undefined | Vector2>()
    const status = useSelector((state: RootState) => state.tools.createNode)

    useEffect(() => {
        document.body.style.cursor = 'crosshair'
    }, [status])

    if(!status)
        return null

    return <div>

    </div>
}

export default CreateNode
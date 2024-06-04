import { RootState } from "@/hooks"
import { useSelector } from "react-redux"


const Layouts = () => {
    const { items } = useSelector((state: RootState) => state.nodes)

    return <div className="w-full grid grid-cols-1 gap-y-[.5vh] py-4 border-b-solid border-b-2 border-b-[#ffffff20] text-white">
        {items.map(({ node: { name } }, i) => <div
            key={i}
            className="ml-8"
        >
            {name}
        </div>)}
    </div>
}

export default Layouts
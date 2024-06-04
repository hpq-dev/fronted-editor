import { RootState } from "@/hooks";
import { setCurrInterface } from "@/hooks/interfaces";
import { motion } from "framer-motion";
import { GoPlus } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";

const LayoutControlInterfaces = () => {
    const { items, current } = useSelector((state: RootState) => state.interfaces)

    const dispatch = useDispatch()

    const handlerPage = (index: number) => {
        dispatch(setCurrInterface(index))
    }

    return <div className="w-full">
        <div className="w-full h-fit border-b-solid border-b-2 border-b-[#ffffff20]">
            <div className="w-[80%] m-auto h-24 border-0 border-b-solid flex items-center justify-between">
                <div className="text-white text-[2em] font-bold">
                    Interfaces
                </div>
                <div className="text-white text-3xl">
                    <GoPlus />
                </div>
            </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-y-2 pl-8 py-4 border-b-solid border-b-2 border-b-[#ffffff20]">
            {items.map(({ name, id }, i) => <motion.div
                key={i}
                className="text-[#ffffff30] text-xl"
                animate={current !== id ? {} : { color: '#fff' }}
                onClick={() => handlerPage(id)}
            >
                {name}
            </motion.div>)}
        </div>
    </div>
}

export default LayoutControlInterfaces
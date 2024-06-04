import { PiHashStraight } from "react-icons/pi";
import { FaRegSquare } from "react-icons/fa";
import { BiText } from "react-icons/bi";
import { motion } from 'framer-motion'
import createNode from "@/core/nodes/createNode";
import { useDispatch } from "react-redux";

const parts = [
    <PiHashStraight />,
    <FaRegSquare />,
    <BiText />
]

const Navbar = () => {
    const dispatch = useDispatch()

    const handler = (index: number) => {
        switch (index) {
            case 1: {
                createNode(dispatch, [0])
                break;
            }
        }
    }

    return <div className="bg-[#00000065] p-3 text-white text-3xl rounded-2xl outline backdrop-blur-lg outline-1 outline-[#ffffff30] fixed left-1/2 -translate-x-1/2 top-4 flex gap-x-4">
        {parts.map((part, i) => <motion.div
            key={i}
            className="p-1 rounded-lg hover:bg-[#ffffff20] transition-colors duration-300"
            whileTap={{
                scale: .8
            }}
            onClick={() => handler(i)}
        >
            {part}
        </motion.div>)}
    </div>
}

export default Navbar
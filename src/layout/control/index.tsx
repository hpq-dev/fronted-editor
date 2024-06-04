import LayoutControlInterfaces from "./interfaces"
import Layouts from "./layouts"

const LayoutControl = () => {
    return <div className="h-[80vh] w-96 border-solid border-2 border-[#ffffff20] rounded-3xl fixed left-8 top-1/2 -translate-y-1/2 bg-[#00000066] backdrop-blur-lg">
        <LayoutControlInterfaces />
        <Layouts />
    </div>
}

export default LayoutControl
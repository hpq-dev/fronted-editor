import Editor from "./core/editor";
import LayoutControl from "./layout/control";
import Navbar from "./layout/nav";

const App = () => {
    return <div className="bg-[#171717] absolute left-0 top-0 w-full h-[100vh]">
        <Editor />
        <LayoutControl />
        <Navbar />
    </div>
};

export default App
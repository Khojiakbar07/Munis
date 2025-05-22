import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
    return (
        <div className="app__bg">
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
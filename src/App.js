import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./components/page/Detail";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/page/:pageId" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeTemplate from "./Templates/HomeTemplate";
import DemoGlasses from "./Pages/DemoGlasses";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<HomeTemplate />}>
              <Route path="*" element={<Navigate to={"/"} />}></Route>
              <Route path="cart" element={<DemoGlasses />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

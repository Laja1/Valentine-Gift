import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Unlock from "./components/Unlock";
import Yes from "./components/Yes";
import Final from "./components/Final";
import ValentinePage from "./components/ValentinePage";
import No from "./components/No";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Unlock" element={<Unlock />}></Route>
        <Route path="/ValentinePage" element={<ValentinePage />}></Route>
        <Route path="/Yes" element={<Yes />}></Route>
        <Route path="/Final" element={<Final />}></Route>
        <Route path="/No" element={<No />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

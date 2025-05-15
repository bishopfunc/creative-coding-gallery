import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import SketchA from "./components/SketchA";
import SketchB from "./components/SketchB";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sketchA" element={<SketchA />} />
      <Route path="/sketchB" element={<SketchB />} />
    </Routes>
  </BrowserRouter>
);

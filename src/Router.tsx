import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SketchPageProvider, useSketchPages } from "./SketchPageContext";
import App from "./App";

const InnerRouter = () => {
  const sketchPages = useSketchPages();

  return (
    <Routes>
      <Route path="/" element={<App />} />
      {sketchPages.map((page, index) => (
        <Route key={index} path={page.pagePath} element={page.element} />
      ))}
    </Routes>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <SketchPageProvider>
        <InnerRouter />
      </SketchPageProvider>
    </BrowserRouter>
  );
};

export default Router;

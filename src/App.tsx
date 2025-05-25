import { Link } from "react-router-dom";
import { useSketchPages } from "./SketchPageContext";

const App = () => {
  const sketchPages = useSketchPages();

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Creative Coding Gallery</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {sketchPages.map((page, index) => (
          <div key={index}>
            <Link to={`${page.pagePath}`} style={{ fontSize: "1.2rem" }}>
              {page.title}
            </Link>
            {page.imagePath && (
              <img
                width={200}
                height={200}
                src={page.imagePath}
                alt={page.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

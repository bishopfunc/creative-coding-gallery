// App.tsx

const sketchPages = [
  { title: "Sketch A", path: "/sketchA" },
  { title: "Sketch B", path: "/sketchB" },
];

const App = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>p5.js Sketch Gallery</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {sketchPages.map((sketch, index) => (
          <div key={index}>
            <h3>{sketch.title}</h3>
            <iframe
              src={sketch.path}
              width="400"
              height="300"
              style={{ border: "1px solid #ccc", borderRadius: "8px" }}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

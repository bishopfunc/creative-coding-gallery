import { ReactP5Wrapper } from "react-p5-wrapper";
import { useRef } from "react";
import type p5 from "p5";
import type { SketchFunc } from "../utils/types";
import type { Sketch } from "react-p5-wrapper";
type Props = {
  title: string;
  fileName: string;
  sketchFunc: SketchFunc;
};

const SketchPageWrapper = ({ title, sketchFunc, fileName }: Props) => {
  const p5InstanceRef = useRef<p5 | null>(null);
  const wrappedSketch: Sketch = (p: p5) => {
    p5InstanceRef.current = p;
    sketchFunc(p);
  }
  const handleSavePNG = () => {
    p5InstanceRef.current?.saveCanvas(fileName, "png");
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column" as const,
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center" as const,
      }}
    >
      <h1>{title}</h1>
      <div id="main" style={{ border: "1px solid #ccc", borderRadius: "8px" }}>
        <ReactP5Wrapper sketch={wrappedSketch} />
      </div>
      <div>
        <button onClick={handleSavePNG} style={{ marginTop: "1rem" }}>Save PNG</button>
        {/* <button onClick>Save GIF</button> */}
      </div>
    </div>
  );
};

export default SketchPageWrapper;

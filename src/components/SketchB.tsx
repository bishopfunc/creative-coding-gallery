// components/SketchB.tsx
import { ReactP5Wrapper } from "react-p5-wrapper";
import { sketchB } from "../sketches/sketchB";

const SketchB = () => {
  return (
    <div>
      <h2>Sketch B</h2>
      <p>これはマウスに追従する青い四角を描くスケッチです。</p>
      <ReactP5Wrapper sketch={sketchB} />
    </div>
  );
};

export default SketchB;

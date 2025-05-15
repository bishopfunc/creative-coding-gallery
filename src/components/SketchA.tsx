// components/SketchA.tsx
import { ReactP5Wrapper } from "react-p5-wrapper";
import { sketchA } from "../sketches/sketchA";

const SketchA = () => {
  return (
    <div>
      <h2>Sketch A</h2>
      <p>これはマウスに追従する赤い円を描くスケッチです。</p>
      <ReactP5Wrapper sketch={sketchA} />
    </div>
  );
};

export default SketchA;

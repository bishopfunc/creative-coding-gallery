import p5 from "p5";
import type { SketchFunc } from "../utils/types";

export const ellipse: SketchFunc = (p: p5) => {
  p.setup = () => {
    p.createCanvas(500, 500);
    p.noFill();
    p.background('#292a33');
  };

  p.draw = () => {
    p.stroke(p.random(100, 180));
    const w = p.random(50, 300);
    const h = p.random(50, 300);
    p.ellipse(p.width / 2, p.height / 2, w, h);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background('#292a33');
  };

  return p;
};

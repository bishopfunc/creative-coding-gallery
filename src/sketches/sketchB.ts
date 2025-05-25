import p5 from "p5";
import type { SketchFunc } from "../utils/types";

export const sketchB: SketchFunc = (p: p5) => {
  p.setup = () => {
    p.createCanvas(800, 800);
    p.background(200);
  };
  
  p.draw = () => {
    p.fill(0, 0, 255);
    p.rect(p.mouseX, p.mouseY, 40, 40);
  };
  return p;
};

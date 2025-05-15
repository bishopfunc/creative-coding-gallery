// sketches/sketchB.ts
import p5 from "p5";

export const sketchB = (p: p5) => {
  p.setup = () => {
    p.createCanvas(300, 200);
    p.background(200);
  };
  p.draw = () => {
    p.fill(0, 0, 255);
    p.rect(p.mouseX, p.mouseY, 40, 40);
  };
};

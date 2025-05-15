// sketches/sketchA.ts
import p5 from "p5";

export const sketchA = (p: p5) => {
  p.setup = () => {
    p.createCanvas(300, 200);
    p.background(255);
  };
  p.draw = () => {
    p.fill(255, 0, 0);
    p.ellipse(p.mouseX, p.mouseY, 50);
  };
};

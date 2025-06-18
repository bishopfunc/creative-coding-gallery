import p5 from "p5";
import type { SketchFunc } from "../utils/types";

export const pointAndNoise: SketchFunc = (p: p5) => {
  const colorPat = ['#1C6DD0', '#000000'];
  const noiseScale = 10;
  const loopNum = 3000;
  const pointNum = 1000;
  const scaleX = 500 * 1.5;
  const scaleY = 500 * 1.5;

  p.setup = () => {
    p.createCanvas(500, 500);
    p.background(255);
    p.strokeWeight(0.5);
    p.stroke(0, 100);

    for (let i = 0; i < loopNum; i++) {
      let x = p.random(-1, 1);
      let y = p.random(-1, 1);
      const col = p.color(p.random(colorPat));
      col.setAlpha(96); // 60 in hex
      p.stroke(col);

      for (let j = 0; j < pointNum; j++) {
        x = p.noise(x * noiseScale, y * noiseScale) - 1 / 8;
        y = p.noise(x * noiseScale, y * noiseScale) - 1 / 8;
        p.point(scaleX * x, scaleY * y);
      }
    }
  };

  return p;
};

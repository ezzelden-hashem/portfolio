/// <reference lib="webworker" />

import { CircleCanvasAnimator } from "./circle-canvas-animation-ww/circle-canvas-animator";
let offscreen: OffscreenCanvas | null = null;
let windowWidth: number | null = null;
let windowHeight: number | null = null;
let cca: CircleCanvasAnimator | null = null;
addEventListener('message', ({ data }) => {
  if (data.type === 'offscreen')
  {
    offscreen = data.offscreenCanvas as OffscreenCanvas;
    windowWidth = data.windowWidth as number;
    windowHeight = data.windowHeight as number;
    cca = new CircleCanvasAnimator(offscreen.getContext('2d')!, windowWidth, windowHeight);
    cca.startAnimation();
  }
});

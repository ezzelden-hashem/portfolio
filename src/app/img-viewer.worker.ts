/// <reference lib="webworker" />

import { ImgViewerEngine } from "./img-viewer/img-viewer.engine";
let offscreen: OffscreenCanvas;
let bitMap: ImageBitmap;
let windowWidth: number;
let windowHeight: number;
let imgViewerEngine: ImgViewerEngine | null = null;
addEventListener('message', ({ data }) => {
  if (data.type === 'offscreen')
  {
    offscreen = data.offscreenCanvas as OffscreenCanvas;
    bitMap = data.bitMap as ImageBitmap;
    windowWidth = data.windowWidth as number;
    windowHeight = data.windowHeight as number;
    imgViewerEngine = new ImgViewerEngine(
      offscreen.getContext('2d')!,
      bitMap,
      windowWidth,
      windowHeight
    );
  }
  if (data.type === 'zoom')
  {
    imgViewerEngine?.zoom(data.mouseX, data.mouseY, data.deltaY);
  }
  if (data.type === 'start-pan')
  {
    imgViewerEngine?.saveMouseDeltaPosition(data.mouseX, data.mouseY);
  }
  if (data.type === 'pan')
  {
    imgViewerEngine?.pan(data.mouseX, data.mouseY);
  }
  if (data.type === 'end-pan')
  {
    imgViewerEngine?.deleteMouseDeltaPosition();
  }
});

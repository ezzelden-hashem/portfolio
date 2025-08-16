export class ImgViewerEngine
{
    private ctx: OffscreenCanvasRenderingContext2D;
    private bitMap: ImageBitmap;
    private bitMapPosition: {x: number; y: number};
    private bitMapWidth: number;
    private bitMapHeight: number;
    private windowWidth: number;
    private windowHeight: number;
    private dirty: boolean = true;
    private currentScale: number = 1;
    private scaleStep: number = 0.5;
    private deltaMouseX: number | null = null;
    private deltaMouseY: number | null = null;
    constructor(ctx: OffscreenCanvasRenderingContext2D, bitMap: ImageBitmap, width: number, height: number)
    {
        this.ctx = ctx;
        this.bitMap = bitMap;
        this.windowWidth = width;
        this.windowHeight = height;
        const imgBoundingObject = this.calculateFitRect();
        this.bitMapPosition = {x: imgBoundingObject.x, y: imgBoundingObject.y};
        this.bitMapWidth = imgBoundingObject.imgWidth;
        this.bitMapHeight = imgBoundingObject.imgHeight;
        this.renderImage()
    }
    public zoom(mouseX: number, mouseY: number, wheelDelta: number)
    {
        const lenghtDelta = this.calculateLengthDelta(wheelDelta);
        if (this.bitMapWidth + lenghtDelta.width > 200)
        {
            if
            (
                mouseX >= this.bitMapPosition.x && 
                mouseY >= this.bitMapPosition.y &&
                mouseX <= (this.bitMapPosition.x + this.bitMapWidth) &&
                mouseY <= (this.bitMapPosition.y + this.bitMapHeight)
            )
            {
                const newZoomPosition = this.calculateNewZoomPosition(wheelDelta, {x: mouseX, y: mouseY})
                this.bitMapPosition.x = newZoomPosition.x;
                this.bitMapPosition.y = newZoomPosition.y;
                this.bitMapWidth += lenghtDelta.width;
                this.bitMapHeight += lenghtDelta.height;
                this.ctx.clearRect(0, 0, this.windowWidth, this.windowHeight);
                this.overrideDraw()
            }
        }
    }
    public saveMouseDeltaPosition(mouseX: number, mouseY: number)
    {
        this.deltaMouseX = mouseX - this.bitMapPosition.x;
        this.deltaMouseY = mouseY - this.bitMapPosition.y;
    }
    public pan(mouseX: number, mouseY: number)
    {
        if (this.deltaMouseX && this.deltaMouseY)
        {
            this.bitMapPosition.x = mouseX - this.deltaMouseX;
            this.bitMapPosition.y = mouseY - this.deltaMouseY;
            this.ctx.clearRect(0, 0, this.windowWidth, this.windowHeight);
            this.overrideDraw()
        }
    }
    deleteMouseDeltaPosition()
    {
        this.deltaMouseX = null;
        this.deltaMouseY = null;
    }
    private renderImage()
    {
        const draw = () => {
            if (this.dirty) {
                this.updateView();
                this.dirty = false;
            }
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }
    private updateView()
    {
        this.ctx.clearRect(0, 0, this.windowWidth, this.windowHeight);
        this.ctx.drawImage(
            this.bitMap, 
            this.bitMapPosition.x,
            this.bitMapPosition.y, 
            this.bitMapWidth,
            this.bitMapHeight
        );
    }
    private overrideDraw()
    {
        this.ctx.drawImage(
            this.bitMap, 
            this.bitMapPosition.x,
            this.bitMapPosition.y, 
            this.bitMapWidth,
            this.bitMapHeight
        );
    }
    private calculateFitRect(): {x: number; y: number; imgWidth: number; imgHeight: number;}
    {
        const imgWidth = this.calculateFitDimentions()[0];
        const imgHeight = this.calculateFitDimentions()[1];
        if (imgWidth === this.windowWidth)
        {
            const x = 0;
            const y = (this.windowHeight - imgHeight) / 2;
            return { x, y, imgWidth, imgHeight }
        }
        else
        {
            const x = (this.windowWidth - imgWidth) / 2;
            const y = 0;
            return { x, y, imgWidth, imgHeight }
        }
    }
    private calculateFitDimentions(): [number, number]
    {
        const windowRatio = this.windowWidth / this.windowHeight;
        const bitMapRatio = this.bitMap.width / this.bitMap.height;
        if (bitMapRatio > windowRatio)
        {
            const newHeight = (this.windowWidth * this.bitMap.height) / this.bitMap.width;
            return [this.windowWidth, newHeight];
        }
        else
        {
            const newWidth = (this.windowHeight * this.bitMap.width) / this.bitMap.height;
            return [newWidth, this.windowHeight];
        }
    }
    private calculateNewZoomPosition(
        wheelDelta: number,
        mousePosition: Position
    ): Position
    {
        const lenghtDelta = this.calculateLengthDelta(wheelDelta)
        const distanceX = mousePosition.x - this.bitMapPosition.x;
        const distanceY = mousePosition.y - this.bitMapPosition.y;
        const ratioX = distanceX / this.bitMapWidth;
        const ratioY = distanceY / this.bitMapHeight;
        const deltaX = lenghtDelta.width * ratioX;
        const deltaY = lenghtDelta.height * ratioY;
        const newX = mousePosition.x - (deltaX + distanceX);
        const newY = mousePosition.y - (deltaY + distanceY);
        return {x: newX, y: newY}
    }
    calculateLengthDelta(wheelDelta: number): Dimensions
    {
        const widthDelta = -wheelDelta / this.scaleStep;
        const heightDelta = (-wheelDelta / this.scaleStep) * this.bitMapHeight / this.bitMapWidth;
        return {width: widthDelta, height: heightDelta};
    }
}
type Position = {
    x: number;
    y: number;
}
type Dimensions = {
    width: number;
    height: number;
}
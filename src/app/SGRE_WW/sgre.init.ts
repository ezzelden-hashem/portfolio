import { IShape } from "./sgre.model";

export class SGRE
{
    public refreshRate = 60;
    public shapes: IShape[] = [];
    private ctx: OffscreenCanvasRenderingContext2D;
    private canvasWidth: number = 0;
    private canvasHeight: number = 0;
    private resizeState: boolean = false;
    constructor(ctx: OffscreenCanvasRenderingContext2D, canvasWidth: number, canvasHeight: number)
    {
        this.ctx = ctx;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    public setOffscreenCanvasDimensions(canvasWidth: number, canvasHeight: number)
    {
        // this method have some bugs

        // this.resizeState = true;
        // this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        // this.canvasWidth = canvasWidth;
        // this.canvasHeight = canvasHeight;
        // this.resizeState = false;
    }
    public getResizeState()
    {
        return this.resizeState;
    }
    public setResizeState(state: boolean)
    {
        this.resizeState = state;
    }
    public getCtxObj(): OffscreenCanvasRenderingContext2D
    {
        return this.ctx;
    }
    public addShape(shape: IShape)
    {
        this.shapes.push(shape);
    }
    public renderCanvas(): any
    {
        const draw = () => {
            if (!this.resizeState) this.updateCanvas();
            requestAnimationFrame(draw);
        }
        requestAnimationFrame(draw);
    }
    private updateCanvas()
    {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        for (let i = 0; i < this.shapes.length; i++)
        {
            this.shapes[i].render();
        }
        this.collectGarbage();
    }
    private clear()
    {
        this.shapes = [];
    }
    private collectGarbage()
    {
        this.shapes = this.shapes.filter((shape) => {return shape.state.running});
    }
}

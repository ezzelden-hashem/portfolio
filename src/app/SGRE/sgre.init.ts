import { IShape } from "./sgre.model";


const domBody: HTMLBodyElement = document.body as HTMLBodyElement;


export class SGRE
{
    public refreshRate = 60;
    public shapes: IShape[] = [];
    private domBody: HTMLBodyElement;
    private domCanvas: HTMLCanvasElement = document.createElement('canvas');
    private ctx: CanvasRenderingContext2D;
    constructor(domBody: HTMLBodyElement)
    {
        this.domBody = domBody;
        this.domCanvas.id = 'sgre-canvas-' + Math.floor(Math.random() * 1000000000);
        this.initCssStyle(this.domCanvas);
        this.domBody.appendChild(this.domCanvas)
        this.domCanvas.width = this.domCanvas.getBoundingClientRect().width;
        this.domCanvas.height = this.domCanvas.getBoundingClientRect().height;
        this.ctx = this.domCanvas.getContext('2d')!;
    }
    public getCtxObj(): CanvasRenderingContext2D
    {
        return this.ctx;
    }
    public addShape(shape: IShape)
    {
        this.shapes.push(shape);
    }
    public renderCanvas(): any
    {
        this.updateCanvas();
        return setInterval(() => 
        {
            this.updateCanvas()
        }, 1000 / this.refreshRate);
        // requestAnimationFrame(this.renderCanvas);
    }
    public updateCanvas()
    {
        this.domCanvas.width = this.domCanvas.getBoundingClientRect().width;
        this.domCanvas.height = this.domCanvas.getBoundingClientRect().height;
        this.ctx.clearRect(0, 0, this.domCanvas.width, this.domCanvas.height);
        for (let i = 0; i < this.shapes.length; i++)
        {
            this.shapes[i].render();
        }
        this.collectGarbage();
    }
    public clear()
    {
        this.shapes = [];
    }
    private collectGarbage()
    {
        this.shapes = this.shapes.filter((shape) => {return shape.state.running});
    }
    private initCssStyle(canvasElement: HTMLCanvasElement)
    {
        canvasElement.style.position = 'fixed';
        canvasElement.style.top = '0';
        canvasElement.style.left = '0';
        canvasElement.style.width = '100vw';
        canvasElement.style.height = '100vh';
        canvasElement.style.zIndex = '-1';
    }
}

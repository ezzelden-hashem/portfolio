
import { FadeInOut } from "../SGRE_WW/effect/fade.effect";
import { Motor } from "../SGRE_WW/effect/motor.effect";
import { Path } from "../SGRE_WW/path/path.init";

import { SGRE } from "../SGRE_WW/sgre.init";
import { Point } from "../SGRE_WW/sgre.model";
import { Circle } from "../SGRE_WW/shape/circle.shape";
import { CCARange } from "./cca.model";

export class CircleCanvasAnimator
{
    // public colorList = ['#7700ffff', '#0051ffff', '#00ffffff'];
    // public colorList = ['#00ffeeff', '#00ff73ff', '#ff0073ff', '#ffffff'];
    // public colorList = ['#ff0000ff', '#ff8800ff', '#ffea00ff', '#2bff00ff']
    
    public colorsObject = {
        'light': {
            'blue': ['#003cffff', '#007c63ff', '#262971ff', '#0080ffff'],
            'green': ['#11641aff', '#13523fff', '#206a82ff', '#467f6cff'],
            'orange': ['#8a3c10ff', '#927900ff', '#571818ff'],
            'pink': ['#7b001dff', '#632b6bff', '#1d4d5eff', '#381010ff'],
            'purple': ['#00376eff', '#3b006eff', '#5c0554ff', '#160064ff']
        },
        'dark': {
            'blue': ['#9000ffff', '#ff0088ff', '#0008ffff', '#0080ffff'],
            'green': ['#00a6ffff', '#44ff00ff', '#d9ff00ff', '#00ffaaff'],
            'orange': ['#ff0000ff', '#ffd500ff', '#8cff00ff', '#ff0000ff'],
            'pink': ['#ff003cff', '#e100ffff', '#00bbffff', '#00ffd9ff'],
            'purple': ['#0080ffff', '#0051ffff', '#ae00ffff', '#ff00b7ff']
        },
    }
    public colorList = this.colorsObject.light.blue;
    // public colorList = ['#3e0085ff', '#002064ff', '#007676ff'];
    // public speedList = [500, 100, 200, 250];
    // public speedList = [10, 20, 300, 200];
    public speedList = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    // public circleCountRange: CCARange = {from: 7, to: 30};
    public circleCountRange: CCARange = {from: 20, to: 50};
    public circleRadiusRange: CCARange = {from: 15, to: 70};
    private sgre: SGRE | null;
    private positionRangeOffset: CCARange = {from: 100, to: 600};
    private canvasWidth: number;
    private canvasHeight: number;
    private ctx: OffscreenCanvasRenderingContext2D;
    constructor(ctx: OffscreenCanvasRenderingContext2D , canvasWidth: number, canvasHeight: number)
    {
        this.ctx = ctx;
        this.sgre = new SGRE(ctx, canvasWidth, canvasHeight);
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.sgre.renderCanvas();
    }
    public startAnimation()
    {
        if (this.sgre)
        {
            setInterval(() => {
                if (this.sgre!.shapes.length < this.circleCountRange.to) {
                    this.initializeCircles(this.circleCountRange.from);
                }
            }, 500);
        }
    }
    public setOffscreenCanvasDimensions(canvasWidth: number, canvasHeight: number)
    {
        // this method have some bugs

        // this.sgre?.setResizeState(true);
        // this.canvasWidth = canvasWidth;
        // this.canvasHeight = canvasHeight;
        // this.sgre?.setOffscreenCanvasDimensions(canvasWidth, canvasHeight);
        // this.sgre?.setResizeState(false);
    }
    private initializeCircles(count: number)
    {
        // console.log(this.sgre.shapes)
        for (let i = 0; i < count; i++)
        {
            let position: Point = 
            {
                x: Math.floor(Math.random() * (this.canvasWidth - 200)),
                y: Math.floor(Math.random() * (this.canvasHeight - 200))
            };
            let path = new Path(position, {
                x: position.x + Math.floor(
                    (Math.random() * this.positionRangeOffset.to) + this.positionRangeOffset.from
                ) * ((Math.random() < 0.5) ? -1 : 1),
                y: position.y + Math.floor(
                    (Math.random() * this.positionRangeOffset.to) + this.positionRangeOffset.from
                ) * ((Math.random() < 0.5) ? -1 : 1),
            });
            let radius = Math.floor(
                (Math.random() * this.circleRadiusRange.to) + this.circleRadiusRange.from
            );
            let cType = Math.floor(Math.random() * 3);
            let circle = new Circle(this.sgre!.getCtxObj(), position, radius);
            circle.opacity = 0;
            circle.circleColor = {
                strokeColor: (cType == 5)? this.colorList[Math.floor(Math.random() * this.colorList.length)] : null,
                fillColor: (cType == 2)? this.colorList[Math.floor(Math.random() * this.colorList.length)] : null,
            };
            let motor = new Motor(
                circle, 
                path, 
                this.speedList[Math.floor(Math.random() * this.speedList.length)]
            );
            let fadeDuration = motor.getDurationInMs() / 3;
            let fadeEffect = new FadeInOut(circle, fadeDuration, fadeDuration, fadeDuration);
            circle.addEffect(motor);
            circle.addEffect(fadeEffect);
            this.sgre!.addShape(circle);
        }
    }
}
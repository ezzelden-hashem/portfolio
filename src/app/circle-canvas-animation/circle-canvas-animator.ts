import { FadeInOut } from "../SGRE/effect/fade.effect";
import { Motor } from "../SGRE/effect/motor.effect";
import { Path } from "../SGRE/path/path.init";
import { Point } from "../SGRE/path/path.module";
import { SGRE } from "../SGRE/sgre.init";
import { Circle } from "../SGRE/shape/circle.shape";
import { CCARange } from "./cca.model";

export class CircleCanvasAnimator
{
    public colorList = ['#7700ffff', '#0051ffff', '#00ffffff'];
    // public colorList = ['#00ffeeff', '#00ff73ff', '#ff0073ff', '#ffffff'];
    // public colorList = ['#ff0000ff', '#ff8800ff', '#ffea00ff', '#2bff00ff']
    // public colorList = ['#3e0085ff', '#002064ff', '#007676ff'];
    // public speedList = [50, 500, 1000, 750];
    public speedList = [100, 150, 200];
    public circleCountRange: CCARange = {from: 7, to: 30};
    public circleRadiusRange: CCARange = {from: 15, to: 60};
    private sgre: SGRE;
    private positionRangeOffset: CCARange = {from: 100, to: 500};
    constructor(domBody: HTMLBodyElement)
    {
        this.sgre = new SGRE(domBody);
        this.sgre.renderCanvas();
    }
    public startAnimation()
    {
        setInterval(() => {
            if ((this.sgre.shapes.length > this.circleCountRange.from && this.sgre.shapes.length < this.circleCountRange.to) || this.sgre.shapes.length <= this.circleCountRange.from)
            {
                this.initializeCircles(this.circleCountRange.from);
            }
            // console.log(this.sgre.shapes.length)
        }, 500);
    }
    private initializeCircles(count: number)
    {
        for (let i = 0; i < count; i++)
        {
            let position: Point = 
            {
                x: Math.floor(Math.random() * window.innerWidth),
                y: Math.floor(Math.random() * window.innerHeight)
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
            let circle = new Circle(this.sgre.getCtxObj(), position, radius);
            circle.opacity = 0;
            circle.circleColor = {
                strokeColor: (cType == 1)? this.colorList[Math.floor(Math.random() * this.colorList.length)] : null,
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
            this.sgre.addShape(circle);
        }
    }
}
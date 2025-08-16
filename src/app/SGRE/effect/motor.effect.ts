import { Path } from "../path/path.init";
import { EffectState, IEffect, IShape } from "../sgre.model";

export class Motor implements IEffect
{
    public state: EffectState = {started: false, running: false, ended: false};
    public path: Path;
    private refreshRate = 100; // frame per seconds
    private period = (1000 / this.refreshRate) / 1000;
    private shape: IShape;
    private speed: number; // pixel per seconds
    constructor(shape: IShape, path: Path, speed: number)
    {
        this.shape = shape;
        this.path = path;
        this.speed = speed;
    }
    public startEffect()
    {
        this.state.started = this.state.running = true;
        const duration = this.path.length() / this.speed;
        const steps = duration / this.period;
        const periodDistance = this.speed * this.period;
        for (let i = 0; i < steps; i++)
        {
            let pointPosition = this.path.pointAt((periodDistance * i) / this.path.length());
            setTimeout(() => {
                this.shape.position = pointPosition;
                if (i >= steps - 1)
                {
                    this.state.ended = true;
                    this.state.running = false;
                }
            }, this.period * 1000 * (i + 1));
        }
    }
    public getDurationInMs(): number
    {
        return (this.path.length() / this.speed) * 1000;
    }
}
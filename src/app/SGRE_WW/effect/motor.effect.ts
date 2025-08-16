import { Path } from "../path/path.init";
import { EffectState, IEffect, IShape } from "../sgre.model";
import { TimeLine } from "../time-line/sgre.time-line";

export class Motor implements IEffect
{
    public state: EffectState = {started: false, running: false, ended: false};
    public path: Path;
    private shape: IShape;
    private speed: number; // pixel per seconds
    private duration: number;
    private startTime: number | null = null;
    private timeLine: TimeLine | null = null;
    constructor(shape: IShape, path: Path, speed: number)
    {
        this.shape = shape;
        this.path = path;
        this.speed = speed;
        this.duration = this.path.length() / this.speed;
        this.timeLine = TimeLine.getInstance();
    }
    public startEffect()
    {
        if (!this.state.started)
        {
            this.state.started = this.state.running = true;
            this.startTime = Date.now();
        }
        const elapsedTime = Date.now() - this.startTime!;
        const elapsedDistance = elapsedTime / (this.duration * 1000);
        if (elapsedTime < (this.duration * 1000))
        {
            this.shape.position = this.path.pointAt(elapsedDistance);
            this.timeLine?.requestTimeLineFrame(() => this.startEffect());
        } 
        else
        {
            this.state.ended = true;
            this.state.running = false;
            // console.log(this.state);
        }
    }
    public getDurationInMs(): number
    {
        return (this.path.length() / this.speed) * 1000;
    }
}
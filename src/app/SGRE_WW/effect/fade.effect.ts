import { EffectState, IEffect, IShape, MilliSeconds } from "../sgre.model";
import { TimeLine } from "../time-line/sgre.time-line";

export class FadeInOut implements IEffect
{
    public state: EffectState = {started: false, running: false, ended: false};
    private shape: IShape;
    private fadeInTime: MilliSeconds;
    private fadeOutTime: MilliSeconds;
    private delay: MilliSeconds;
    private duration: number;
    private startTime: number | null = null;
    private timeLine: TimeLine | null = null;
    constructor(shape: IShape, fadeInTime: MilliSeconds, delay: MilliSeconds, fadeOutTime: MilliSeconds)
    {
        this.shape = shape;
        this.fadeInTime = fadeInTime;
        this.fadeOutTime = fadeOutTime;
        this.delay = delay;
        this.duration = fadeInTime + delay + fadeOutTime;
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
        if (elapsedTime < this.fadeInTime)
        {
            this.shape.opacity = elapsedTime / this.fadeInTime;
            this.timeLine?.requestTimeLineFrame(() => this.startEffect());
        }
        else if (elapsedTime < this.fadeInTime + this.delay)
        {
            this.timeLine?.requestTimeLineFrame(() => this.startEffect());
        }
        else if ((elapsedTime < this.duration) && (elapsedTime >= (this.fadeInTime + this.delay)))
        {
            const fadeOutElapsed = elapsedTime - (this.fadeInTime + this.delay);
            this.shape.opacity = 1 - (fadeOutElapsed / this.fadeOutTime);
            this.timeLine?.requestTimeLineFrame(() => this.startEffect());
        }
        else
        {
            this.state.running = false;
            this.state.ended = true;
            // console.log(this.state);
        }
    }
}
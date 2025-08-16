import { EffectState, IEffect, IShape, MilliSeconds } from "../sgre.model";

export class FadeInOut implements IEffect
{
    public state: EffectState = {started: false, running: false, ended: false};
    private refreshRate = 100;
    private period = (1000 / this.refreshRate) / 1000;
    private shape: IShape;
    private fadeInTime: MilliSeconds;
    private fadeOutTime: MilliSeconds;
    private delay: MilliSeconds;
    private precision = 1000;
    constructor(shape: IShape, fadeInTime: MilliSeconds, delay: MilliSeconds, fadeOutTime: MilliSeconds)
    {
        this.shape = shape;
        this.fadeInTime = fadeInTime;
        this.fadeOutTime = fadeOutTime;
        this.delay = delay;
    }
    public startEffect()
    {
        this.state.started = true;
        this.state.running = true;
        this.fadeInAnimation();
        setTimeout(() => {
            this.fadeOutAnimation()
        }, this.delay + this.fadeInTime);
        setTimeout(() => {
            this.state.running = false;
            this.state.ended = true;
        }, this.fadeInTime + this.delay + this.fadeOutTime);
        // setInterval(() => {
        //     console.log(this.state)
        //     // console.log('')
        // }, 1000);
    }
    private fadeInAnimation()
    {
        this.fade(0, 1, this.fadeInTime);
    }
    private fadeOutAnimation()
    {
        this.fade(1, 0, this.fadeOutTime);
    }
    private fade(from: number, to: number, duration: number)
    {
        from = Math.min(1, Math.max(0, from))
        to = Math.min(1, Math.max(0, to))
        this.shape.opacity = from;
        const steps = duration / (this.period * 1000);
        const periodChange = (((this.precision / duration) / this.precision) * 10) * ((to === 0)? 1 : to);
        for (let i = 0; i < steps; i++)
        {
            setTimeout(() => {
                this.shape.opacity += (to > from) ? periodChange : periodChange * -1;
            }, this.period * 1000 * (i + 1));
        }
    }
}
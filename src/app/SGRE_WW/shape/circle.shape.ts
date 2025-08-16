import { CircleColor, EffectState, IEffect, IShape, Point } from "../sgre.model";

export class Circle implements IShape
{
    public state: EffectState = {started: false, running: false, ended: false};
    public position: Point;
    public opacity: number = 1;
    public circleColor: CircleColor = {fillColor: null, strokeColor: null};
    private ctx: OffscreenCanvasRenderingContext2D;
    private effects: IEffect[] = [];
    private radius: number;
    private effectStarted = false;

    constructor(ctx: OffscreenCanvasRenderingContext2D, position: Point, radius: number = 100)
    {
        this.ctx = ctx;
        this.position = position;
        this.radius = radius;
    }
    public transulateX(distance: number)
    {
        this.position.x += distance;
    }
    public transulateY(distance: number)
    {
        this.position.y += distance;
    }
    public moveTo(position: Point): void
    {
        this.position.x = position.x;
        this.position.y = position.y;
    }
    public render()
    {
        if (!this.state.started) this.state.started = this.state.running = true;
        this.ctx.beginPath();
        this.ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
        
        
        if (this.circleColor.fillColor)
        {
            this.ctx.fillStyle = this.calculatedColor(this.circleColor.fillColor);
            this.ctx.shadowColor = this.circleColor.fillColor;
            this.ctx.shadowBlur = 100;
            this.ctx.fill();
        }
        if (this.circleColor.strokeColor)
        {
            this.ctx.strokeStyle = this.calculatedColor(this.circleColor.strokeColor);
            this.ctx.lineWidth = 5
            this.ctx.shadowColor = this.circleColor.strokeColor;
            this.ctx.shadowBlur = 20;
            this.ctx.stroke();
        }
        this.ctx.closePath();
        this.applyEffects();
        this.checkEffectState();
    }
    public addEffect(effect: IEffect)
    {
        this.effects.push(effect)
    }
    private applyEffects()
    {
        if (!this.effectStarted)
        {
            for (let effect of this.effects)
            {
                effect.startEffect();
            }
            this.effectStarted = true;
        }
    }
    private checkEffectState()
    {
        let done = 0;
        for (let effect of this.effects)
        {
            if (effect.state.ended) done++;
        }
        if (this.effects.length === done)
        {
            this.state.running = false;
            this.state.ended = true;
        }
    }
    private calculatedColor(color: string): string
    {
        if (color[0] === '#')
        {
            const r = parseInt(color.slice(1, 3), 16);
            const g = parseInt(color.slice(3, 5), 16);
            const b = parseInt(color.slice(5, 7), 16);
            return `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
        }
        return `rgba(150, 150, 150, ${this.opacity})`;
    }
}

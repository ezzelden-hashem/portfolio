import { PathCommand, Point } from "./path.module";

export class Path
{
    private commands: PathCommand[] = [];
    private initialPosition: Point = { x: 0, y: 0 };
    constructor(start: Point)
    {
        this.initialPosition = start;
        this.commands.push({ type: 'moveTo', to: start});
    }
    moveTo(to: Point): this
    {
        this.commands.push({ type: 'moveTo', to});
        return this;
    }
    lineTo(to: Point): this
    {
        this.commands.push({ type: 'lineTo', to});
        return this;
    }
    bezierCurveTo(cp1: Point, cp2: Point, to: Point): this
    {
        this.commands.push({ type: 'bezierCurveTo', cp1, cp2, to });
        return this;
    }
    timeline(t: number): Point
    {
        // Clamp
        t = Math.max(0, Math.min(1, t));

        // Flatten segments and calculate their lengths
        const segments: { from: Point, to: Point, eval: (t: number) => Point, length: number }[] = [];

        let current = this.initialPosition;

        for (const cmd of this.commands.slice(1))
        {
            if (cmd.type === 'lineTo')
            {
                const from = current;
                const to = cmd.to;
                const length = Math.hypot(to.x - from.x, to.y - from.y);
                segments.push(
                    {
                        from, to, length,
                        eval: (tt) => ({
                            x: from.x + (to.x - from.x) * tt,
                            y: from.y + (to.y - from.y) * tt
                        })
                    }
                );
                current = to;
            }
            else if (cmd.type === 'bezierCurveTo')
            {
                const from = current;
                const {cp1, cp2, to} = cmd;
                const length = 1 // Approximate or precalculate if needed
                segments.push({
                    from, to, length,
                    eval: (tt) => cubicBezier(from, cp1, cp2, to, tt)
                });
                current = to;
            }
        }
        // Compute total length (for proportional t mapping)
        const totalLength = segments.reduce((sum, seg) => sum + seg.length, 0);
        let dist = t * totalLength;

        for (const seg of segments)
        {
            if (dist <= seg.length)
            {
                const segT = (seg.length === 0) ? 0 : dist / seg.length;
                return seg.eval(segT);
            }
            dist -= seg.length;
        }

        // Fallback
        return segments.at(-1)?.to || this.initialPosition;
    }
}

function cubicBezier(p0: Point, p1: Point, p2: Point, p3: Point, t: number): Point {
    const u = 1 - t;
    return {
        x:
        u ** 3 * p0.x +
        3 * u ** 2 * t * p1.x +
        3 * u * t ** 2 * p2.x +
        t ** 3 * p3.x,
        y:
        u ** 3 * p0.y +
        3 * u ** 2 * t * p1.y +
        3 * u * t ** 2 * p2.y +
        t ** 3 * p3.y
    };

}

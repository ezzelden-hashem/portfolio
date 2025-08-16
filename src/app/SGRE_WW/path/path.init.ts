import { Point } from "../sgre.model";

export class Path
{
    private start: Point;
    private end  : Point;
    constructor(start: Point, end: Point)
    {
        this.start = start;
        this.end = end;
    }
    pointAt(position: number): Point
    {
        // Clamp
        position = Math.max(0, Math.min(1, position));
        const x = this.start.x + ((this.end.x - this.start.x) * position);
        const y = this.start.y + ((this.end.y - this.start.y) * position);
        return { x, y };
    }
    length(): number
    {
        return Math.hypot((this.end.x - this.start.x), (this.end.y - this.start.y));
    }
}

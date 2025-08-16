export interface Point { x: number; y: number }
export type PathCommand = 
    | { type: 'moveTo'; to: Point }
    | { type: 'lineTo'; to: Point }
    | { type: 'bezierCurveTo'; cp1: Point; cp2: Point; to: Point }

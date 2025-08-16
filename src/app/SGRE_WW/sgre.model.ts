export interface Point { x: number; y: number }
export interface IShape
{
    state: EffectState;
    position: Point;
    opacity: number;
    render(): void;
}
export interface IEffect
{
    state: EffectState
    startEffect(): any;
}
export type EffectState = 
{
    started: boolean;
    running: boolean;
    ended: boolean;
}
export enum MagnetType
{
    Attraction,
    Repulsion
}
export type CircleColor = 
{
    fillColor  : string | null;
    strokeColor: string | null;
}
export type MilliSeconds = number;
export type MagnetPower = number;
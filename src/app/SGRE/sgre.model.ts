import { Point } from "./path/path.module";

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
export type MilliSeconds = number;
export type MagnetPower = number;
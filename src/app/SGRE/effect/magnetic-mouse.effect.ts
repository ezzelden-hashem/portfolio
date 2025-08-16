import { EffectState, IEffect, IShape, MagnetPower, MagnetType } from "../sgre.model";

export class MagneticMouse implements IEffect
{
    public state: EffectState = {started: false, running: false, ended: false};
    public magnetType: MagnetType;
    public magnetPower: MagnetPower;
    private shape: IShape;
    constructor(shape: IShape, magnetType: MagnetType = MagnetType.Attraction, magnetPower: MagnetPower = 100)
    {
        this.shape = shape;
        this.magnetType = magnetType;
        this.magnetPower = magnetPower;
    }
    startEffect() {
        throw new Error("Method not implemented.");
    }
    
}
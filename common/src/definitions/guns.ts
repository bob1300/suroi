import { type ItemDefinition } from "../utils/objectDefinitions";
import { v, type Vector } from "../utils/vector";

export interface GunDefinition extends ItemDefinition {
    readonly type: "gun"

    readonly cooldown: number
    readonly fireMode: "single" | "auto"
    readonly shotSpread: number
    readonly bulletCount?: number
    readonly fists: {
        readonly left: Vector
        readonly right: Vector
        readonly animationDuration: number
    }
    readonly image: {
        readonly position: Vector
        readonly angle?: number
    }
    readonly capacity: number
    readonly ballistics: {
        readonly damage: number
        readonly obstacleMultiplier: number
        readonly speed: number
        readonly speedVariance: number
        readonly maxDistance: number
    }
}

export const Guns: GunDefinition[] = [
    {
        idString: "ak47",
        type: "gun",
        cooldown: 100,
        fireMode: "auto",
        shotSpread: 5,
        fists: {
            left: v(65, 0),
            right: v(140, -10),
            animationDuration: 100
        },
        image: { position: v(120, 0) },
        capacity: Infinity,
        ballistics: {
            damage: 10,
            obstacleMultiplier: 2,
            speed: 0.35,
            speedVariance: 0,
            maxDistance: 100
        }
    },
    {
        idString: "m3k",
        type: "gun",
        cooldown: 1000,
        fireMode: "single",
        shotSpread: 10,
        bulletCount: 9,
        fists: {
            left: v(65, 0),
            right: v(140, -10),
            animationDuration: 100
        },
        image: { position: v(120, 0) },
        capacity: Infinity,
        ballistics: {
            damage: 6.5,
            obstacleMultiplier: 3,
            speed: 0.35,
            speedVariance: 0,
            maxDistance: 150
        }
    }
];
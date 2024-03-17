import {inverseLerp, lerp, clamp} from "/home/kdog3682/2024-javascript/js-toolkit/mathkit/lerp.js"
import {toRadians} from "/home/kdog3682/2024-javascript/js-toolkit/mathkit/toRadians.js"
import {fixFloatingPoint} from "/home/kdog3682/2024-javascript/js-toolkit/mathkit/fixFloatingPoint.js"


export {
    fixFloatingPoint,
    lerp,
    clamp,
    inverseLerp,
    average,
    sum,
    ffp,
    toRadians,
}


function ffp(p) {
    return {
        x: fixFloatingPoint(p.x, 0),
        y: fixFloatingPoint(p.y, 0),
    }
}


function average(...args) {
    return sum(args) / args.length
}

function sum(items, fn) {
    const start = typeof items[0] == 'number' ? 0 : ''
    const f = (a, item, i) => (a += fn ? fn(item, i) : item)
    return items.reduce(f, start)
}

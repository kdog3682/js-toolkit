import {toRadians} from "/home/kdog3682/2024-javascript/js-toolkit/mathkit/toRadians.js"
import {fixFloatingPoint} from "/home/kdog3682/2024-javascript/js-toolkit/mathkit/fixFloatingPoint.js"


export {
    fixFloatingPoint,
    ffp,
    toRadians,
}


function ffp(p) {
    return {
        x: fixFloatingPoint(p.x, 0),
        y: fixFloatingPoint(p.y, 0),
    }
}

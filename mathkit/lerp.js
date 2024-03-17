export {
    inverseLerp,
    lerp,
    clamp,
}



function inverseLerp(x, y, a) {
    return clamp((a - x) / (y - x))
}

function clamp(n, min = 0, max = 1) {
    return Math.min(Math.max(n, min), max)
}

function lerp(x, y, a) {
    return x * (1 - a) + y * a
}

export {
    fixFloatingPoint,
}
function fixFloatingPoint(value, maxPrecision = 1) {
    for (let p = 0; p <= maxPrecision; p++) {
        const rounded = parseFloat(value.toFixed(p))
        if (Math.abs(value - rounded) < Math.pow(10, - (p + 1))) {
            return rounded
        }
    }
    return value
}

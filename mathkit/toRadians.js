export {
    toRadians,
}
function normalizeAngle(angle) {
    angle = angle % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}

function toRadians(angle) {
    if (Number.isInteger(angle)) {
        return normalizeAngle(angle) * Math.PI / 180
    }
    return angle
}

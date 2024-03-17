export { path, flash, revolve }

function animate(el, animationProps, options) {
    if (!options) {
        options = standardOptions
    }
    return new Promise((resolve, reject) => {
        const animation = el.animate(animationProps, options)
        animation.onfinish = () => {
            resolve()
        }
        animation.onerror = (error) => {
            reject(error)
        }
    })
}

function path(el, duration = 1000) {
    const length = el.getTotalLength()

    el.style.strokeDasharray = length
    el.style.strokeDashoffset = length

    return animate(
        el,
        [
            { strokeDashoffset: length }, // from
            { strokeDashoffset: 0 } // to
            // appear or disappear it
        ],
        {
            duration,
            easing: "linear", // linear easing
            fill: "forwards" // animation remains at the final keyframe
        }
    )
}

function revolve(line, duration = 1000, iterations = 1) {
    const bbox = line.getBBox()
    const centerX = bbox.x + bbox.width / 2
    const centerY = bbox.y + bbox.height / 2
    line.style.transformOrigin = `${centerX}px ${centerY}px`

    const animationProps = {
        transform: ["rotate(0deg)", "rotate(360deg)"]
    }

    const options = {
        duration, // 3 seconds duration
        easing: "linear", // Linear easing
        iterations // Repeat infinitely
    }
    return animate(line, animationProps, options)
}


const standardOptions = {
    duration: 2500,
    easing: "linear", // linear easing
    easing: "ease-in-out", // linear easing
    fill: "forwards" // animation remains at the final keyframe
}

function flash(el, duration = 1000) {
    return inAndOut(el, "background", "yellow")
}

function inAndOut(el, key, value) {
    const prev = window.getComputedStyle(el).getPropertyValue(key)
    const keyframes = [
        { offset: 0, [key]: prev },
        { offset: 0.5, [key]: value },
        { offset: 1, [key]: prev }
    ]
    return animate(el, keyframes)
}

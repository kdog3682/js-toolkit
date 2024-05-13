export { fadeOut, fadeIn, animatePath, flash, revolve, animate, fade }


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

function fade(el, duration = 1500) {
    return animate(
        el,
        [
            { opacity: 1 },
            { opacity: 0 }
        ],
        {
            duration,
            easing: "ease-out", 
            fill: 'forwards',
        }
    )
}
function animatePath(el, duration = 2000) {
    const length = el.getTotalLength()

    el.style.strokeDasharray = length
    el.style.strokeDashoffset = length

    return animate(
        el,
        [
            { strokeDashoffset: length },
            { strokeDashoffset: 0 }
        ],
        {
            duration,
            easing: "linear", // linear easing
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




function fadeOut(el, duration = 1500) {
    return animate(
        el,
        [
            { opacity: 1 },
            { opacity: 0 }
        ],
        {
            duration,
            easing: "ease-out", 
            fill: 'forwards',
        }
    )
}


function fadeIn(el, duration = 1500) {
    return animate(
        el,
        [
            { opacity: 0 },
            { opacity: 1 },
        ],
        {
            duration,
            easing: "ease-in", 
            fill: 'forwards',
        }
    )
}

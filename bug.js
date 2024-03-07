function bug(fn, s, ...args) {
    const value = fn(s.trim(), ...args)
    console.log(value)
}

export {
    bug
}

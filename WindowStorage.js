export {
    WindowStorage,
}

import {
    CreateCypher,
} from "./cypher.js"
import {
    Store,
    deepMerge,
    isDefined,
    parseJSON,
    stringify,
    getFallback,
    type,
} from "/home/kdog3682/2023/utils.js"


class WindowStorage extends Store {

    // set(...args) { return dictSetter(this.store, ...args) }
    set(...args) {
        const payload = {
            value: args.pop(),
            timestamp: Date.now(),
        }
        return super.set(...args, payload)
    }
    constructor(key) {
        super()
        const {encrypt, decrypt} = CreateCypher()
        this.encrypt = encrypt
        this.decrypt = decrypt

        this.upload = this.upload.bind(this)
        this.uploadOnce = this.uploadOnce.bind(this)
        this.download = this.download.bind(this)

        this.init(key)
    }
    set onLeave(fn) {
        window.addEventListener('leave', fn)
    }
    init(key) {
        if (!key) return 
        this.key = key
        this.encryptedKey = this.encrypt(key)
        return this.download()

    }
    uploadOnce() {
        if (this.touched) {
            console.log('already uploaded. early return')
            return 
        }
        return this.upload()
    }
    upload(key) {
        setStorage(key || this.encryptedKey, this.store)
        this.touched = true
        return this
    }
    download() {
        this.store = getStorage(this.encryptedKey) || {}
        return this
    }
    increment(key, increment) {
        this.set(key, (this.get(key) || 0) + (increment || 1))
    }
    reset(key) {
        this.set(key, getFallback(this.get(key)))
    }
}

function getStorage(key) {
    return parseJSON(localStorage.getItem(key))
}

function setStorage(key, value = '') {
    if (key && isDefined(value)) {
        return localStorage.setItem(key, stringify(value))
    }
}

function mergeStorage(key, content) {
    const prev = getStorage(key) || getFallback(content)
    setStorage(key, deepMerge(prev, content))
}

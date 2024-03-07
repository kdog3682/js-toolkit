
export {
    LocalStorage,
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


class LocalStorage {
    constructor(options = {}) {
        const {encrypt, decrypt} = CreateCypher()
        this.prefix = options.name || ''
        this.encrypt = encrypt.bind(this)
        this.decrypt = decrypt.bind(this)
    }
    get(k) {
        const key = this.encrypt(this.prefix + k)
        const value = getStorage(key)
        return this.decrypt(value)
    }
    set(k, v) {
        const key = this.encrypt(this.prefix + k)
        setStorage(key, this.encrypt(v))
    }
    getset(k, fn) {
        const prev = this.get(k)
        const newValue = fn(prev)
        this.set(k, newValue)
    }
    merge(k, v) {
        const merger = (prev) => {
            return deepMerge(prev, v)
        }
        return this.getset(k, merger)
    }
    toJSON() {
        return { ...localStorage }
    }
    remove(k) {
        const key = this.encrypt(this.prefix + k)
        localStorage.removeItem(key)
    }
    clear() {
        localStorage.clear()
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


import * as datetime from "/home/kdog3682/2024-javascript/datetime/main.js"

export {
    LocalStorage,
    ExpirationalStorage,
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
    isNode,
} from "/home/kdog3682/2023/utils.js"

// __mocks__/localStorage.js
const localStorageMock = ((data) => {
  const base = {
      foo: 1,
  }
  const store = Object.assign(base, data)

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    removeItem(key) {
      delete store[key];
    },
    get value() {
        return store
    },
    clear() {
      store = {};
    },
    [Symbol.iterator]() {
      return store
    }
  };
})();


if (isNode()) {
    Object.defineProperty(global, 'localStorage', {
      value: localStorageMock,
    });
    // console.log(localStorage)
    console.log('defining localStorage because inside of node')
}

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
        const payload = typeof value == 'object' ? JSON.stringify(value) : value
        return localStorage.setItem(key, payload)
    }
}

function mergeStorage(key, content) {
    const prev = getStorage(key) || getFallback(content)
    setStorage(key, deepMerge(prev, content))
}

function isExpired(timestamp, offset = 1000) {
    return timestamp + offset < Date.now()
}
class ExpirationalStorage extends LocalStorage {
    get(k) {
        const base = super.get(k)

        if (base == null || isExpired(base.expiration)) {
            return null
        }
        // console.log('FRESH:', k, base.value)
        return base.value
    }
    set(k, value, expiration) {
        expiration = expiration || { years: 1 }
        const payload = {
            expiration: Date.now() + datetime.convert(expiration, 'ms'),
            value
        }
        super.set(k, payload)
    }
}

// const storage = new ExpirationalStorage({name: 'bkl'})
// console.log(storage.set('foo', 11, ))
// console.log(storage.getset('foo', (x) => x + 1))
// console.log(storage.get('foo'))
// console.log(localStorage.value)

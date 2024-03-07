export { CreateCypher, createPassword, encrypt, decrypt, XKQR }
import {
    abrev,
    char2n,
    capitalize,
    map,
    split,
    parseJSON,
    isString,
    curry,
} from "/home/kdog3682/2023/utils.js"

function createPassword(s) {
    let n = map(split(abrev(s), ""), char2n).join("")
    while (s.length < 10) {
        s += s
    }
    let length = s.length
    let ceaser = ceaserRotation(s, length)
    return capitalize(ceaser.toLowerCase()) + n
}

function ceaserRotation(s, rotation = 13) {
    return s.toUpperCase().replace(/[A-Z]/g, rot13)
    function rot13(correspondance) {
        const charCode = correspondance.charCodeAt()
        let x =
            charCode + rotation <= 90
                ? charCode + rotation
                : ((charCode + rotation) % 90) + 64

        return String.fromCharCode(x)
    }
}

const CreateCypher = (salt = 'xyz') => {
    const applySalt = (s, salt) =>
        textToChars(salt).reduce((a, b) => a ^ b, s)
    const byteHex = (n) =>
        ("0" + Number(n).toString(16)).substr(-2)
    const textToChars = (s) =>
        s.split("").map((c) => c.charCodeAt(0))

    const encrypt = (s, salt) => {
        if (!s) return ''
        if (!isString(s)) {
            s = JSON.stringify(s)
        }
        return s
            .split("")
            .map(textToChars)
            .map(curry(applySalt, salt))
            .map(byteHex)
            .join("")
    }

    const decrypt = (s, salt) => {
        if (!s) return ''
        const value = s
            .match(/.{1,2}/g)
            .map((hex) => parseInt(hex, 16))
            .map(curry(applySalt, salt))
            .map((charCode) =>
                String.fromCharCode(charCode)
            )
            .join("")
        return parseJSON(value)
    }

    return {
        encrypt: curry(encrypt, salt),
        decrypt: curry(decrypt, salt),
    }
}

const {encrypt, decrypt} = CreateCypher()

function createFirebaseDecrypt() {
    const salt = "1d12091e191a081e3814151d121c"
    const g = CreateCypher(salt).decrypt
    const f = (state) => {
        return g(state['configString'])
    }
    return f
}
const XKQR = createFirebaseDecrypt()


const firebaseConfig = {
  apiKey: "AIzaSyCOTawJsonmn-tMczAwn9aZcZlIplwP4vo",
  authDomain: "hammy-math-class.firebaseapp.com",
  databaseURL: "https://hammy-math-class-default-rtdb.firebaseio.com",
  projectId: "hammy-math-class",
  storageBucket: "hammy-math-class.appspot.com",
  messagingSenderId: "37397511963",
  appId: "1:37397511963:web:8192df6cdbb76720c61dbe",
  measurementId: "G-KJZ6Z4PMJC"
}
// /* prettier-ignore */ import {componentManager, rpx, datetime, tclip, jclip, readRaw, manager, prependOrReplace, mdate, WriteFile, LogFile, vimFunctionConnector, tempFile, resolvePath, path2024, write2024, packageManager3, smart_path, createCodeString2, buildBindings2, JavascriptBuilder, ltf, appendVariable3, generateFile, generateImports, getStats, ff, createCodeString, finishConfig, findError2, onConfigStart, packageManager2, getFiles2, colonPackageManager, packageManagerSingletonRunColon, getText, packageManagerSingleton, oneArg, toVimVariable, headAndTail, absdir, getSection, sortByDate, dateTheFile, vimConnector, writeExportFile, pathJoin, jslib, pylib, backupFile, writeAndBackup, superFileGetter, submit, clipOrLog, fileGetter, toTimestamp, appendVariableFile, readParse, incrementalName, rfile, getJuneJson, isRecentFile, unmute, clip2, clip2 as c2, appendVariable2, moduleFunctionFactory, dirGetter, save, getRecentFile, fileOrText, logger, writeFromOptions, appendFileName, backup, getFiles, packageManager, mergeJson, fileFromKey, path, mergeFiles, writeUnitTest, runUnitTest, NodeError, isDir, NodeAssertion, sysArgs, sysArg, mute, abspath, getFile, logAction, head, getDir, dirFromPath, npath, textAndLang, shunt, sysget, append, prepend, currentFile, clip, isFile, normFileDir, normRead, normWrite, normAppend, normPrepend, normRpw, openFile, read, rpw, textGetter, write, getString, appendSelf, appendVariable, argv, exit, request} from "/home/kdog3682/2023/node-utils.js"
// clip(encrypt(firebaseConfig))


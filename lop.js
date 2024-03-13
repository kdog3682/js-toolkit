function sysArgs(x) {
    const args = process.argv.slice(2)
    if (empty(args)) {
        return console.log('PackageManager is not active')
    }
    const computedArgs = args.map(shellUnescape)
    const fn = isFunction(x) ? x : x[computedArgs.shift()]
    assertion(fn)
    return [fn, computedArgs]
}
/* prettier-ignore */ import {fooga, strcall, getLongest2, must, mconfig, unreachable, notify, storager, joiner, removeVeryStartingComments, ireplace, removeCommentsInPlace, editf, getLineTokens, IndexedStore, abstractError, bool, xassert, getSetLines, inMiddle, replaceLast, ensureExtension, multipleReplacer, getGradeLevel, constructEdit, getYear, Modulus, wrapClassMethods, proseReplacer, parseComments, parseFunctionDictComments, todo, dictAssertion, boundModularIncrement, construct, reduceToString2, pageTurner, assignCumulative, defaultMergeStrategy, dictSetter3, toArguments, reTemplate, parseFrontmatter, typeAssertion, defineGetter, assignAllowed, simpleRecursiveWalk, simpleArgument, exprTemplater, stringifyIfNotPrimitive, panic, stringerf, wrapFunction, regexTemplater, iso8601, strftime, walkChildEntries, getFiletype, matchf, isUrl, looksLikeFunction, toArgument2, notNull, CumulativeStorage2, simpleAssign, findAndMatch, infuseObjectArray, regexGetter, splitArg, isJavascriptComment, runTest, everyOther, splitByRange, get_regex, getImports, isJavascriptFile, isValidDateString, WriteObject, equalityf, group2, splitOnce2, dedent4, isLowerCase, looksLikeRegExpString, isRegExpString, getDependencies, camelSplit, toggle3, countf, isLiteralObject, bindMethodsAndState2, call, mget3, looks_like_object_function, create_functions_from_master, toStringArgumentPretty, codeChunks, smart_map, run_tests, hasStartingCallable, mapTemplate, aliaser, fixSelector, htmlTags, removePythonComments, simpleStringBreaker, colonConfig, operations, error, redColon, so2, group, parseSingleLineJson, Items, findDependencies, tryf, find4, localeString, cssComment, colonConfigf, trimArray, parseCallable, bringToLifeTextFix, localBringToLife, getCaller4, getErrorStack, forEach, getBindings, getExports, matchstr, filter4, allEqual, count, isNativeFunction, repeat, eat, getIndentAndText, StopWatch, stringDictSetter, getFunctionInfo, runRef, toLines, hasCallable, getProseWords, tally, paramify, codeSplit, debugConfig, logConfig, blueColon, toStringArgument3, stringCallable, simpleBinding, dashSplit4, appendBelow, appendAbove, removeLineComments, prependIfNecessary, smartDedent4, blueSandwich, walk4, findLineIndex, parseAB, applyTransform, kebabCase, getExcerpt, sortObject, buildFunction, maybeSort, parseFunction, isTypable, frontMatter, dictEntry, insertAfterIndex, State, bindMethods, cpop, tagRE, toggle2, createFunction2, assignIncrementedIndex, ufa, assignArray, regexFromComment, createParsersFromObject, imatch, globalConsoleDebug, bindMethodsAndState, isQuestion, oxfordComma, isUpperCase, getFunctionIdentifier, filter3, match, getMatch, alternatef, reCombine, assertion2, deepEqual, hasDollar, so, deepAssign, Tally, getFunctionNames, notEqual, tryString, prettyPrintCodeSnippet, prettyPrintErrorStack, iter, quotify, transformerf, assign, defineBinding, jspy, linebreak, stringCall2, reduce3, getClassParameters, assignOnTop2, isIdentifier, ndy, dashSplit3, runFunctionFromRef, equalf, alphabet, stateGetterFromSchema, mreplace, require, topLineComment, isChinese, replacef, ignoref, codeLibrary, splitLines, addArgumentQuotes, getBindings2, addCaret, mget2, getStartingConfig, incrementalEat, strlen, hr, setOnce, unescapeHtml, oxford, breakerf, runTests, map3, dateSplit, transformDict, walk3, toRegExp, tryAgainf, assertNotNull, getArgumentObject, isArgumentObject, typef, requireArg, keyAndValue, assignf, stateGetter3, objectFromArguments2, assignDefaults, transformValue, assign3, assignFresh3, evaluate3, scopedEvaluator, objectFromArguments, enforce, sub, filterObject, extractStartingJsonLikeConfig, unbrackify, newlineIndent2, deleteLine, both, normalizeIndent, getComment, secondComment, isStringRegExp, dashSplit2, clock, warning, errorStringify, alert, labelCase, bottomComment, stringCompose, getAnyIdentifier, chalkf, getNumbers, partitions, has, addUnit, toCallable, unquote, filter2, warn2, join2, caller2, assignOnce, longShort, shortLong, argPop, caller, assignOnTop, toggle, defineWindow, unescapeNewlines, escapeQuotes, unescapeQuotes, escapeNewlines, setAliases, announceCaller, removeStartingComments, smartBind, assignExisting, isObjectWithKey, eatStart, modularIncrementItem, getRegex, runFunction, isObjectLikeArray, itemGetter2, getAllKeys, prefixSlice, hasQuotes, assertion, diff, toggleState, initState, dunder, objectGetter, superTransform, popFilter, testRunner, assert2, insertAtDollar, popEmptyLine, getOptions, mergeSpecs, sortByKeys, map2, strictMessengerAssert, smartSplit, chalk4, typeLog, getFunctionName, Clock, search3, MyError, fuzzyMatch3, debugDisplay, getCaller3, messengerAssert, camelSlice, setPrototype, assignAliases, display, modifyNumber, toDict, setPush, modularIncrementIndex, longstamp, popIndex, toggleOnOff, locWrap, walk2, typeMatch, prettyStringify, getIdentifiers, CustomError, argMatch, brackify2, smartestDedent, modularIncrementNumber, AbstractMethodError, allUnique, Trie, boundarySplit, numberBoundarySplit, nodeLog, getFirst, defineProperty, supermix, partial, timeLog, timestamp, raise, getIdentifier, conditionalPrefix, conditionalSuffix, QueryList, fuzzyMatch2, buildDict, getTextAndCommand, sprawlFactory, getParameters2, pushf, intersection, union, blue, green, sandwich, getLastSpaces, smartDedent3, red, sort, debounce, checkValue, getCodeChunks, logf, boundary, myError, conditional, isStringFunction, toSpaces, objectf, searchAll, difference, singleQuote, itemGetter, slice2, mergeObjects, once, dashSplit, nchalk, coerceToObject, ArrayState, exporter2, indent2, iterator, removeAllComments, countParams, cumulativeSchemaAssign, argKwargSplit, argParse, removeInlineComments, getFrontMatter, hasHtmlSuffix, lazyArray, isThisFunction, escapeHTML, getKwargs2, search2, toStringArgument, createFuzzyMatch, edit2, splice, zip, merge2, argArgsKwargs, fill2, chalk, vueWrap, splitArray, splitArray2, warn, makeRunner2, searchf2, smartDedent2, dedent2, toArray2, stateGetter2, sortByIndex, IndexedCache, argo, curry2, doUntil2, evaluate2, findall2, findIndex2, findItem2, getCaller2, getErrorStack2, isJson, indexGetter2, insert2, pop2, parseError2, remove2, reduce2, testf2, type2, unshift2, waterfall2, xsplit2, Cache, cumulativeAssign, replaceBefore, topComment, isAsyncFunction, mapSort, getFileURI, getQuotes, isClassObject, isInitialized, getFallback, bindingRE, addObjectOrObjectProperty, forDoubles, isCss, log, iterate, backAndForth, round, iteratorWrapper, toJSON, isFromMap, toString, empty, conditionalString, getConfigArg, hasKey, errorWrap, successWrap, check, toPoints, bind, mixinAliases, isPercentage, isBasicType, reducerStrategy, gather, entries, stateGetter, methodCase, vueCase, push2, smarterIndent, lineSplit, Store, isSingleLetter, prepareText, isSymbol, getShortest, slice, KeyError, deepCopy, argsKwargs, isError, isColor, list, objectEditor, matchall, makeFastRunner, announce, hasLetter, filter, reduce, stringCall, capitalizeName, stop, proseCase, lineDitto, mixinSetters, modularIncrement, distinct, definedSort, groupBy, reWrap2, fuzzyMatch, isPlural, Element, parseError, isPrimitiveArray, callableArgsKwargs, waterfall, defineVariable, info, flat2D, splitThePage, handleError, dedent, TypeAssertion, createFunction, pluralize, remove, Group, PageStorage, Storage, UniqueStorage, Watcher, arrayToDict, addProperty, addQuotes, argWrapFactory, assert, abrev, abf, addExtension, assignFresh, antif, atFirst, atSecond, backspace, bindObject, breaker, blockQuote, brackify, bringToLife, comment, countCaptureGroups, capitalizeTitle, classMixin, callableRE, camelToTitle, curry, createVariable, changeExtension, curryStart, curryEnd, capitalize, copy, camelCase, compose, char2n, camelToDash, deepMerge, datestamp, doublef, dictSetter, dictSetter2, dsearch, doUntil, dashCase, doubleQuote, dict, dictGetter, depluralize, dreplace, dictf, endsWithWord, exporter, edit, exists, evaluate, extend, find, flatMap, fill, fixUrl, functionGetter, findall, fixPath, flat, fparse, findIndex, firstLine, ftest, getKwargs, getFirstName, getBindingName, getParameters, getLastWord, getCodeWords, getCodeWords2, getIndent, getExtension, getLast, getLongest, getChunks, getCaller, getStackTrace, getConstructorName, getFirstWord, getWords, getSpaces, hasComma, hasSpaces, hasHtml, hasBracket, hasNewline, hasCaptureGroup, hasEquals, hasValue, hasCamelCase, hasNumber, hackReplace, insert, indexGetter, incrementf, isCallable, isQuote, isEven, isOdd, isLast, isHTML, isNode, interweave, inferLang, isString, isArray, isObject, isDefined, isFunction, isPrimitive, isNumber, isSet, isNestedArray, indent, isNull, isWord, isBoolean, isRegExp, identity, isObjectLiteral, isJsonParsable, isCapitalized, isNewLine, isObjectArray, isStringArray, isClassFunction, joinSpaces, join, keyArrayToObject, lowerCase, linebreakRE, len, lineGetter, lineCount, lastLine, logConsole, makeRunner, mixin, modularf, matchGetter, merge, mget, map, mergeOnTop, mergeToObject, mapFilter, noop, nestPush, no, newlineIndent, n2char, objectWalk, overlap, objectToString, opposite, pipe, parseTopAttrs, pascalCase, partition, parens, push, pop, parseJSON, rigidSort, removeQuotes, rep, removeComments, range, removeExtension, rescape, reverse, reWrap, reduceToString, repeatUntil, swapKey, sayhi, swap, splitMapJoin, splitCamel, smallify, search, stringify, shared, smartDedent, stringBreaker, sleep, split, snakeCase, stringArgument, sorted, splitOnce, searchf, secondLine, titleCase, textOrJson, toNumber, toArgument, toNestedArray, test, type, tail, transformObject, trim, testf, toArray, templater, totalOverlap, upperCase, unique, uncapitalize, unzip, wrap, walk, wrapf, xsplit, yes, zip2} from "/home/kdog3682/2023/utils.js"

function strictAssign(parent, value, mode) {
    const payload = mode == Array ? [value] : value

    const state = parent.state[parent.index]
    if (mode == Array && isObject(state)) {
        panic(
            `
                Cannot assign array: ($value) 
                onto existing object: ($state)
            `,
            { value, state }
        )
    } else if (mode == Object && isArray(state)) {
        panic(
            `
                Cannot assign object: ($value) 
                onto existing array: ($state)
            `,
            { value, state }
        )
    }
    parent.assign(parent.index, payload)
}
function getVal(node, asArray) {
    if (node.key == "curlyBracket") {
        const value = bringToLife(node.text)
        const key = value.name
        if (asArray) {
            return [null, value]
        } else {
            return [key, value]
        }
        return [key, value]
    } else if (node.key == "squareBracket") {
        ndy()
    } else {
        if (asArray) {
            if (/^\S+:/.test(node.text)) {
                const [a, b] = splitter(node.text)
                return [null, { [a]: b }]
            }
            return [null, toArguments(node.text)]
        } else {
            const [a, b] = splitter(node.text)
            return [a, b]
        }
    }
}

function toStringOrObject(node) {
    if (node.text) {
        // handles top level: a: b
        const value = getAssignmentValue(node)
        const key = node.text
        return {
            [key]: value
        }
    }
    return node.state
}
function parse(node) {
    unreachable()
    const [a, b] = getVal(node, true)
    if (a == null) {
        if (isObject(b)) {
            return b
        }
        return [b]
    } else {
        return [a, b]
    }
}

function splitter(s) {
    const r = /^\S+\s*[:=]/.test(s) ? /[:=]/ : /\s+/
    const [a, b] = so(s, r)
    return [a, toArguments(b)]
}
// onLeafEnter ... the main papa
function collectLeafValues(node) {
    // throw node
    // console.log(node.uid)
    const parent = node.parent

    if (isJavascriptComment(node.text)) {
        return
    }

    // const hasNewlines = parent.uid > 1 && parent.newlines
    // if (hasNewlines) {
    // parent.assign(node.parent.index, parse(node))
    // if (node.newlines) {
    // parent.index += 1
    // }
    // return
    // }

    if (node.key == "curlyBracket") {
        const value = bringToLife(node.text)
        const key = value.name
        maybeAssignIndex(node, key, value)
    } else if (parent.strict) {
        if (/^\S+:/.test(node.text)) {
            const [key, value] = splitter(node.text)
            // maybeAssignIndex(node, key, value, true)
            strictAssign(parent, { [key]: value }, Object)
        } else {
            const value = toArguments(node.text)
            strictAssign(parent, value, Array)
        }
    } else {
        const [key, value] = getVal(node)
        maybeAssignIndex(node, key, value)
    }

    // const temp = "123-commands.vim.raw"
    if (node.newlines) {
        if (node.nextSibling) {
            node.parent.index += 1
        } else {
            const neighbor = node.getNextNeighbor()
            if (!neighbor) {
                return
            }
            const parent = neighbor.parent
            if (parent.isRoot()) {
                parent.state = toArray(parent.state)
            } else {
                // console.log(neighbor.ind)
                neighbor.shiftParentIndex = true
            }
        }
    }
}

function maybeAssignIndex(node, key, value, strictMode) {
    const index = node.parent.index
    if (strictMode) {
        if (isArray(node.parent.state[index])) {
            console.log({ key, value })
            panic('StrictMode: cannot assign object to array index')
        }
    }
    if (isDefined(index)) {
        // throw [index, key, value]
        node.parent.assign(index, key, value)
    } else {
        node.parent.assign(key, value)
    }
}
function assignValuesUpwards(node) {
    // onBranchExit
    const value = getAssignmentValue(node)
    const key = node.text
    maybeAssignIndex(node, key, value)
    if (node.shiftParentIndex) {
        node.parent.index += 1
    }
}

function initBranchNodeIndexes(node) {
    node.index = 0
    node.text = node.text.replace(/\W+$/, (x) => {
        if (x.trim() == ":") {
            // strictness is determined here
            node.strict = true
        }
        return ""
    })
    // hmm ... doesnt seem to do anything ... but maybe it does
}

function getAssignmentValue(node) {
    const f = (x) => node.state[x]
    const items = filter(range(node.index + 1).map(f))
    return smallify(items)
}
function onStart(node) {
    if (node.text) {
        initBranchNodeIndexes(node)
    }
}

const lazyObjectTraversal = {
    onEnd: toStringOrObject,
    onBranchEnter: initBranchNodeIndexes,
    onBranchExit: assignValuesUpwards,
    onStart,
    onLeafEnter: collectLeafValues,
    onRootEnter: identity,
    onRootExit: identity,
}
export default lazyObjectTraversal

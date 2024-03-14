/* prettier-ignore */ import { isDefined, isString, isObject, red, indent, dashCase, TypeAssertion, throwError, exists, hasQuotes, hasNewline, hasHtml, newlineIndent, hasHtmlSuffix, empty, reduceToString, removeQuotes, isPrimitive, doubleQuote } from "/home/kdog3682/2023/utils.js"

export { xmlString }

const tagRef = {
    'html': '<!DOCTYPE html><html lang="en"',
}


function xmlString(data, children) {
    const { component, tag, text, newlines, singleLine, html } = data

    if (html) {
        return html
    }
    const attrString = buildAttrString(data)
    const heading = component || tag || "div"
    const delimiter = singleLine ? ' ' : '\n'
    const extraSpacing = singleLine ? '' : ''
    const body = exists(children)
        ? children.join(delimiter)
        : text || ''
        // console.log({body})

    if (heading == 'none') {
        return body
    }
    const htmlBody = singleLine
        ? body
        : hasNewline(body) || hasHtml(body)
        ? '\n' + indent(body) + '\n'
        : extraSpacing + body

    const hasSuffix = hasHtmlSuffix(heading)
    const frontCaret = hasSuffix === true ? ">" : "/>"
    // console.log({frontCaret, heading})

    let s = "<"
    s += tagRef[heading] || heading
    s += attrString

    if (component && htmlBody == '') {
        return s + '/>'
    }

    s += frontCaret

    if (frontCaret == "/>") {
        return s
    }

    s += htmlBody
    s += "</"
    s += heading
    s += ">"

    const spaces = newlines ? '\n'.repeat(newlines) : ''
    return s + spaces
}
function attrCase(s) {
    TypeAssertion(s, String)
        const ignore = [
            "viewBox",
            "refX",
            "refY",
            "markerWidth",
            "markerHeight",
            "patternUnits",
        ]
    if (ignore.includes(s)) {
        return s
    }
    if (/\./.test(s)) {
        return s
    }
    return dashCase(s)
}
function buildAttrString(data) {
    const {
        props,
        events,
        directives,
        attrs,
        style,
        classes,
    } = data

    const buildAttrs = (o, key, delimiter = '=', join = ' ') => {
        const ref = {
            events: "@",
            props: ":"
        }
        const prefix = ref[key] || ""
        const runner = (k, v) => {
            if (v == null) {
                return 
            }
            if (v === '') {
                return k
            }
            return prefix + attrCase(k) + delimiter + vueAttrQuotes(v)
        }
        return reduceToString(o, runner, join)
    }

    const classNameString = buildClassName(data)
    const propString = buildAttrs(props, "props")
    const eventString = buildAttrs(events, "events")
    const directiveString = buildAttrs(directives, "directives")
    const attrString = buildAttrs(attrs, "attrs")
    const styles = styleString(style)

    const aggregate = [
        classNameString,
        propString,
        eventString,
        directiveString,
        attrString,
        styles
    ].filter(exists).join(" ")
    return aggregate ? ' ' + aggregate : ''
}

function styleString(o) {
    const a = reduceToString(o, (k,v) => isDefined(v) ? `${k}: ${v};` : null, ' ')
    return a ? attrEntry('style', a) : ''
}

function vueAttrQuotes(s) {
    if (isString(s)) {
        if (/"/.test(s)) {
            s = s.replace(/\"/g, '\\"')
        }
        if (s.includes("\n")) {
            s = s.replace(/\n/g, "\\n")
        }
    } else {
        s = JSON.stringify(s).replace(/"/g, "'")
    }
    return doubleQuote(s)

}

function attrEntry(a, b) {
    return `${a}="${b}"`
}
function buildClassName(data) {
    let s = ''
    if (data.class) {
        s += data.class + ' '
    }
    if (data.classes) {
        s += data.classes.join(' ').trim()
    }
    if (exists(s)) {
        return `class="${s}"`
    }
    return ''
}

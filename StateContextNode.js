export {
    StateContextNode
}
import {Element} from "/home/kdog3682/2024-javascript/js-toolkit/Element.js"
import {xmlString} from "/home/kdog3682/2024-javascript/js-toolkit/xmlString.js"

class StateContextNode extends Element {
    // constructor(state, parent) {
        // super({state}, parent)
    // }
    smallify() {
        return this.children.length == 1 ? this.firstChild : this
    }
    toJSON() {
        function create(state, children) {
            if (children) {
                return Object.assign(create(state), {children})
            }
            return state?.state || {}
        }
        return this.toRepr(create)
    }
}

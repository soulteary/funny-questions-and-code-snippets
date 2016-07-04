// lazy detect
function type (obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

// Recursion clone
// or https://github.com/lodash/lodash/blob/master/lodash.js#L2360
function process (source) {
    // Primitive values, expect Symbol
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values
    if (!(source instanceof Object)) {
        switch (type(source)) {
            case 'string':
                return String(source);
            case 'number':
                return Number(source);
            case 'boolean':
                return Boolean(source);
            case 'null':
                return null;
            case 'undefined':
                return undefined;
            case 'symbol':
                return new Symbol(source);
            default:
                return null;
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm
    let Constructor = source.constructor;
    let objectCloned = null;

    switch (Constructor) {
        case RegExp:
            objectCloned = new Constructor(source);
            break;
        case Date:
            objectCloned = new Constructor(source.getTime());
            break;
        default:
            objectCloned = new Constructor();
    }

    for (let prop in source) {
        objectCloned[prop] = process(source[prop]);
    }

    return objectCloned;
}

module.exports = function (source) {
    return process(source);
};
function addObjectToWindow(object, name) {
    if (!object) {
        throw new Error(`addObjectToWindow called with an undefined object: ${object}`);
    }
    if (!name) {
        throw new Error(`addObjectToWindow called with an undefined name: ${name}`);
    }
    window[name] = object;
}

function getObjectFromWindow(name) {
    if (!name) {
        throw new Error(`getObjectFromWindow called with an undefined name: ${name}`);
    }
    if (!window[name]) {
        throw new Error(`getObjectFromWindow called with a name of an object not defined on window: ${name}`);
    }
    return window[name];
}

export { addObjectToWindow, getObjectFromWindow };

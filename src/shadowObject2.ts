// In this case, we're moving the implementation across and both exporting it and putting it on window
interface Object2 {
    name: string;
}

const Object2: Object2 = (function createObj2(): Object2 {
    // assigning to a local const and referencing in object returned look odd in this case, 
    // but better matches how this will actually be used in the reall application.
    const name = "object 2";
    return {
        name: name
    }
}());

// this should allow me to temporarily avoid check on interface of window, until we stop putting stuff on window.
const windowAsAny = window as any;
windowAsAny.Obj2 = Object2;

export default Object2;

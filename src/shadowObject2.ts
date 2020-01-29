import { addObjectToWindow } from './windowUtils';

// In this case, we're moving the implementation across and both exporting it and putting it on window
interface Object2 {
    name: string;
}

const Object2: Object2 = (function createObj2(): Object2 {
    // assigning to a local const and referencing in object returned look odd in this case, 
    // but better matches how this will actually be used in the reall application.
    const name = "object 2";
    return {
        name
    };
}());

addObjectToWindow(Object2, 'Obj2');

export default Object2;

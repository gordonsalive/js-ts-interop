// for this 1 we require object 1 and export export it
require("./object1.js");

const windowAsAny = window as any;
const Object1 = windowAsAny.Obj1;

export default Object1;
// The point of this file is to demonstrate a way of interoperating between js files putting stuff on window
//   and typescript stuff that gets imported as required and bundled up for delivery to browser
// The method is as follows:
// o for a js file that sticks itself on window and hasn't been converted to ts,
//    we shadow ts file it with a ts file that requires it, copies ref from window and exports it
//    and then we can use value of window in another js script or import shadow in some ts
// o for a js file which has been converted to ts,
//    at this stage the master mustace file with fetch the bundle containing our converted ts files,
//    the shadow ts file will contain all the code, and initially it will both add it onto window and export it,
//    this means that existing js code that looks for something on window will find it, 
//    but also we can import it as required.
//    At this stage the original ts file is no longer required and can be removed.
//    As part of conversion, when an object is no longer referenced from window, but always imported,
//    then we can stop putting it on window at all. 
import Obj1 from './shadowObject1';
import Obj2 from './shadowObject2';

const sayHowdyFunc: () => string = () => {
    // find the div with id = howdy and set text to concat of both object names from window
    console.log('inside sayHowdyFunc()');

    return (`objects: ${JSON.stringify(Obj1)} , ${JSON.stringify(Obj2)}`);
}

export default sayHowdyFunc
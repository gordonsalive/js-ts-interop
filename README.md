# js-ts-interop
proto for migrating app to ts in a webpack bundle from js fetched into browser, and switching from using window.<someObject> to using ES6/ts import/export instead.

## current situation
js objects are created in files containing immediately invoked functions which put the objects on window (and look for other objects on window).

Our master.mustache file fetches all the js files separately, and this is how application ends up loaded (and objects end up on window).

## end situation
all js code has been converted to ts and is bundled into a single file - we can make full use of ES6 import/export and we never stick stuff on window (or look for stuff there) anymore.  master.mustache file (for a long as it still lasts at this stage) fetches just a single file - the bundle, minified (with still with map for dev sanity).

## migration
to get there we need to gradually migrate our code.  We want to tightly control the standards of our ts code, but js linting remains the same.  We want to not directly access window in our ts code.

### step 1 - create shadow ts files of our existing js files
this step looks like object 1 in this proto.  shadowObject1.ts requires the original js, plucks object off window and exports it, so other ts code makes no reference to window.  In our react application we use imports and make no reference to window.  In our old application, everything remains the same (see howdy.html), our js files can expect stuff to be on window and original js files can be fetched into the browsers individually.  As soon as the first new react page needs to use existing objects, then the bundle will need to be added to the master.mustache file.

### step 2 - move logic into shadow ts files
this is the migration phase of this work - this looks like object 2 in this proto.  shadowObject2.ts now contains the logic and object1.js is no longer required and can be deleted.  The shadow object still puts object on window and exports it.  howdy.html shows how old style pages can continue to use objects off window, the js file fetched in howdy.html references objects 1 and object 2 off window (remember, one is a shadow requiring the original js and the other is a fully converted ts version, but still putting the object onto window).  SayHellow.tsx shows how new react app pages can make use of the object by importing them - in this case, the react component imports howdys.ts which imports objects 1 and two from shadow objects 1 and 2 - it makes no use of window.  As we migrate objects from the original js file to the shadow ts file, then the original file can be deleted and the reference in master.mustache can be removed.

### step 3 - when original js files are no longer required, they can be deleted
finally, all original js files will have been removed and the only file left being fetched in the master.mustach file will be the bundle.

### step 4 - finally we stop using window and then remove mustache
when all pages have been moved into the react app then there will be no need to put the object on window and we can remove all this code on mass (or we can do it piecemeal as individual objects are no longer referenced from window, since their behaior is only called from the react app).  When all pages have moved into the react app, we can stop using mustache.

## next questions
* How will we avoid using HashRouter (by having our own back end)?
* How will we test our new app: react components, and also our our objects and logic 
** can we just import our shadow object into our tests, so that they no longer need to look on window, and they will continue just the same?
* Can I get my shadow objects into the real application without any ill-effects?

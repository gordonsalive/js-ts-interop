// for this 1 we require object 1 and export export it
import './object1.js';
import { getObjectFromWindow } from './windowUtils';

const Object1 = getObjectFromWindow('Obj1');

export default Object1;
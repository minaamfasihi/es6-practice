import {keyVal as key, test} from './external'; // key is the alias for keyVal
import ab from './external'; // no need of curly braces since we are importing a default value
import a from './external'; // we can also change the name of the imported variable since it will always pick the default value
import * as imported from './external'; // using the *, we get all the objects that were exported from the other module in a form of an object.
// we must provide the alias

console.log(keyVal); // 200 and not 100, because we are just importing the references, values are not being copied
test();

// There are two important Rules, which you need to understand if you're working with ES6 Modules:

// Modules are always in Strict Mode (no need to define "use strict")
// Modules don't have a shared, global Scope. Instead each Module has its own Scope

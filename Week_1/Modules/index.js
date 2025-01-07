import connect, {username as name, age} from "./config.js";

import {convert as conversion} from "./helper.js";

console.log(name, age);

console.log(connect());

const currency = conversion(10);

console.log(currency);
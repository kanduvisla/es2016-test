"use strict";

import { Node } from "./elements/node.js";
import { DebugCircle } from "./elements/debugCircle.js";

// Testing:
var root = new Node();
var circle = new DebugCircle();
root.append(circle);

console.log(root.render());
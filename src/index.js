"use strict";

import { Node } from "./elements/node.js";
import { DebugCircle } from "./elements/debugCircle.js";
import { Document } from "./elements/document.js";

// Testing:
// Create 2 nodes:
var root = new Node();
var circle = new DebugCircle();
// Append one to another:
root.append(circle);

// Create a document:
var document = new Document();
document.append(root);

console.log(document.render());
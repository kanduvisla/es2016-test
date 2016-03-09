"use strict";

import { Node } from "./elements/node.js";
import { DebugCircle } from "./elements/debugCircle.js";
import { Document } from "./elements/document.js";
import * as fs from 'fs';

// Testing:
// Create 2 nodes:
var root = new Node();
var circle = new DebugCircle();
// Append one to another:
root.append(circle);

// Create a document:
var document = new Document();
document.append(root);

var output = document.render();
console.log(document.render());

// Write it to a test file:
fs.writeFile('test.svg', output, (err) => {
    if (err) throw err;
    console.log('It\'s saved');
});
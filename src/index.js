"use strict";

import { Node } from "./elements/node.js";
import { DebugCircle } from "./elements/debugCircle.js";
import { Document } from "./elements/document.js";
import { CircleArray } from "./elements/circleArray.js";
import * as fs from 'fs';

// Testing:

// Create a document:
var document = new Document();
document.attributes.width = '800';
document.attributes.height = '800';

// Create root:
var root = new Node();
root.attributes.transform = 'translate(400,400)';

document.append(root);

// Basic example:
var circle = new DebugCircle();
//root.append(circle);

// Circle Array:
var circleArray = new CircleArray();
circleArray.append(circle);
root.append(circleArray);

var output = document.render();
console.log(document.render());

// Write it to a test file:
fs.writeFile('test.svg', output, (err) => {
    if (err) throw err;
    console.log('It\'s saved');
});
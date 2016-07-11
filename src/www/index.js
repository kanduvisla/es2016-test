"use strict"

import { Node } from "../elements/node.js";
import { DebugCircle } from "../elements/debugCircle.js";
import { Document } from "../elements/document.js";
import { CircleArray } from "../elements/circleArray.js";
import { Generator } from "../generator.js";
import { Tree } from "../www/tree.js";


// Entry point for www:
document.addEventListener('DOMContentLoaded', function() {
  // Create SVG document:
  var configuration = {
    type: 'document',
    options: {
      width: 800,
      height: 800
    },
    children: [
      {
        type: 'node',
        attributes: {
          transform: 'translate(400,400)'
        },
        children: [
          {
            type: 'circleArray',
            children: [
              {
                type: 'debugCircle'
              }
            ]
          }
        ]
      }
    ]
  };

  // Render the interface:
  var tree = new Tree();
  tree.fill(configuration);

  // Generate the SVG document:
  var generator = new Generator();
  var svgDocument = generator.parse(configuration);

  // Render it in the browser:
  document.getElementById('main').innerHTML = svgDocument.render();
});
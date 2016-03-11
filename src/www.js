"use strict"

import { Node } from "./elements/node.js";
import { DebugCircle } from "./elements/debugCircle.js";
import { Document } from "./elements/document.js";
import { CircleArray } from "./elements/circleArray.js";
import { Generator } from "./generator.js";

// Entry point for www:
document.addEventListener('DOMContentLoaded', function() {
    // Create SVG document:

    var configuration = {
        width: 800,
        height: 800,
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

    var generator = new Generator();
    var svgDocument = generator.parse(configuration);

    document.getElementById('main').innerHTML = svgDocument.render();
});
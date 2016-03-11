import { Node } from "./elements/node.js";
import { DebugCircle } from "./elements/debugCircle.js";
import { Document } from "./elements/document.js";
import { CircleArray } from "./elements/circleArray.js";

/**
 * Generator class generates a document according to a JSON configuration. This is the heart of the application
 */
export class Generator {
    /**
     * Constructor
     */
    constructor() {

    }

    /**
     * Parse a JSON object
     *
     * @param json
     * @returns {Document}
     */
    parse(json) {
        var document = new Document();

        // Set width and height:
        if (json.width) {
            document.attributes.width = json.width;
        }

        if (json.height) {
            document.attributes.height = json.height;
        }

        // Render:
        if (json.children) {
            this.parseChildren(document, json.children);
        }

        return document;
    }

    /**
     * Parse children
     *
     * @param {Node} target
     * @param {Array} children
     */
    parseChildren(target, children) {
        for (let i = 0; i < children.length; i += 1) {
            if (children[i].type) {
                /** @var {Node} */
                let child;
                // Todo: how can the individual elements hook into this?
                switch (children[i].type) {
                    case 'node' :
                        child = new Node();
                        break;
                    case 'debugCircle' :
                        child = new DebugCircle();
                        break;
                    case 'circleArray' :
                        child = new CircleArray();
                        break;
                }
                // Check for attributes:
                if (children[i].attributes) {
                    child.attributes = children[i].attributes;
                }
                // Parse children:
                if (children[i].children) {
                    this.parseChildren(child, children[i].children);
                }
                // Add it to the target
                target.append(child);
            }
        }
    }
}

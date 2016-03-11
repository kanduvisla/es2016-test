import { Factory } from "./elements/factory.js";
import { Document } from "./elements/document.js";

/**
 * Generator class generates a document according to a JSON configuration. This is the heart of the application
 */
export class Generator {
    /**
     * Constructor
     */
    constructor() {
        this.factory = new Factory();
    }

    /**
     * Parse a JSON object
     *
     * @param json
     * @returns {Document}
     */
    parse(json) {
        var document = new Document();

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
                let child = this.factory.getNode(children[i].type);
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

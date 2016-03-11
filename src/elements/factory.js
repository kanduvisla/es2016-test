import { Node } from "./node.js";
import { DebugCircle } from "./debugCircle.js";
import { Document } from "./document.js";
import { CircleArray } from "./circleArray.js";

/**
 * The factory returns the proper class for the generator and/or the tree
 */
export class Factory {
    /**
     * Return the proper class
     *
     * @param type
     * @returns {Node}
     */
    getNode (type) {
        let child;
        switch (type) {
            case 'document' :
                child = new Document();
                break;
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
        return child;
    }
}
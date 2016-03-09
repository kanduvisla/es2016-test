import { Node } from './node.js';

/**
 * A debug circle
 */
export class DebugCircle extends Node {
    /**
     * Basic setup
     */
    constructor() {
        super();
        this.elementName = 'circle';
        this.attributes.r = 5;
        this.attributes.stroke = '#ccc';
        this.attributes.fill = 'none';
    }
}
import { Node } from './node.js';

export class DebugCircle extends Node {
    constructor() {
        super();
        this.elementName = 'circle';
        this.attributes.r = 5;
        this.attributes.stroke = '#ccc';
        this.attributes.fill = 'none';
    }
}
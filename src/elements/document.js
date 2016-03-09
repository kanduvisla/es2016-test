import { Node } from './node.js';

/**
 * A SVG Document
 */
export class Document extends Node {
    /**
     * Basic setup
     */
    constructor() {
        super();
        this.elementName = 'svg';
        this.attributes.xmlns = 'http://www.w3.org/2000/svg';
        this.attributes.version = '1.1';
    }

    /**
     * Render document
     * @returns {string}
     */
    render() {
        let output = super.render();
        return '<?xml version="1.0" standalone="no"?>' + "\n" + output;
    }
}
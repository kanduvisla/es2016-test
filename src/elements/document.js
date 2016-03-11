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
     * Get the interface of this element. These are the properties that are editable by the user
     *
     * @returns {{}}
     */
    get interface() {
        var myInterface = super.interface;
        // Merge with new options:
        Object.assign(myInterface, {
            width : {
                default: 800,
                min: 100,
                max: 800,
                type: 'slider'
            },
            height : {
                default : 800,
                min: 100,
                max: 800,
                type: 'slider'
            }
        });
        return myInterface;
    }

    /**
     * Render document
     * @returns {string}
     */
    render() {
        this.attributes.width = this.options.width;
        this.attributes.height = this.options.height;
        let output = super.render();
        return '<?xml version="1.0" standalone="no"?>' + "\n" + output;
    }
}
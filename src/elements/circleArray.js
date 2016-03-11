import { Node } from './node.js';

/**
 * The circle array creates an array shaped in a circle
 */
export class CircleArray extends Node {
    /**
     * Basic setup
     */
    constructor() {
        super();
        this.count = 8;
        this.radius = 100;
    }

    /**
     * Override render method:
     */
    render() {
        var output = '';
        var piPart = (2 * Math.PI) / this.count;
        for (let i=0; i < this.children.length; i++) {
            for (let c=0; c < this.count; c++) {
                this.children[i].attributes.transform = 'translate(' + 
                    (Math.sin(c * piPart) * this.radius) + ',' +
                    (Math.cos(c * piPart) * this.radius) + ')';
                output += this.children[i].render();
            }
        }
        return output;
    }
}
import { Node } from './node.js';

/**
 * The circle array creates an array shaped in a circle
 */
export class CircleArray extends Node {
    /**
     * Get the interface of this element. These are the properties that are editable by the user
     *
     * @returns {{}}
     */
    get interface() {
        var myInterface = super.interface;
        // Merge with new options:
        Object.assign(myInterface, {
            count : {
                default: 8,
                min: 2,
                max: 64,
                type: 'slider'
            },
            radius : {
                default : 100,
                min: 1,
                max: 9999,
                type: 'slider'
            }
        });
        return myInterface;
    }

    /**
     * Override render method:
     */
    render() {
        var output = '';
        var piPart = (2 * Math.PI) / this.options.count;
        for (let i=0; i < this.children.length; i++) {
            for (let c=0; c < this.options.count; c++) {
                this.children[i].attributes.transform = 'translate(' + 
                    (Math.sin(c * piPart) * this.options.radius) + ',' +
                    (Math.cos(c * piPart) * this.options.radius) + ')';
                output += this.children[i].render();
            }
        }
        return output;
    }
}
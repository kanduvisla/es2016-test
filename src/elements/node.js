/**
 * A single node in a tree
 */
export class Node {
    /**
     * Constructor call, initial setup
     */
    constructor() {
        this.children = [];
        this.elementName = 'g';
        this.attributes = {};
        this.options = {};
        this.setDefaultOptions();
    }

    /**
     * Set the default options, according to the interface
     */
    setDefaultOptions() {
        for (let option in this.interface) {
            this.options[option] = this.interface[option].default;
        }
    }

    /**
     * Get the interface of this element
     *
     * @returns {{}}
     */
    get interface() {
        return {};
    }

    /**
     * Add a node to the tree
     * @param node
     */
    append(node) {
        this.children.push(node);
    }

    /**
     * Render the node to a SVG element
     * @returns {string}
     */
    render() {
        let output = '<' + this.elementName;
        for (let attr in this.attributes) {
            if (this.attributes.hasOwnProperty(attr)) {
                output += ' ' + attr + '="' + this.attributes[attr] + '"';
            }
        }
        output += '>';
        for (let i=0; i < this.children.length; i ++) {
            output += this.children[i].render();
        }
        output += '</' + this.elementName + '>';
        return output;
    }
}
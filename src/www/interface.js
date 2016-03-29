/**
 * The interface handles the interface for each node that allows us to configure that node.
 */
export class InterfaceObject {
    /**
     * Constructor
     * @param {Object} item
     */
    constructor(item) {
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'interface';
        this.item = item;
    }

    /**
     * Stub for preparation
     */
    prepare() {
        this.wrapper.innerHTML = '';
    }

    /**
     * Get the HTML element
     * @returns {HTMLElement}
     */
    get html() {
        return this.wrapper;
    }
}
import { Slider } from "interface/slider.js";

/**
 * The interface handles the interface for each node that allows us to configure that node.
 */
export class Interface {
    /**
     * Constructor
     * @param {Object} item
     */
    constructor(item) {
        this.wrapper = document.createElement('div');
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
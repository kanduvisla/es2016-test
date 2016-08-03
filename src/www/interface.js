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
        this.listeners = {};
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

    /**
     * Register an event
     * @param eventName
     * @param callback
     */
    addEventListener(eventName, callback) {
        if (!this.listeners[eventName]) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callback)
    }

    /**
     * Dispatch an event
     * @param eventName
     */
    dispatchEvent(eventName) {
        if (this.listeners[eventName]) {
            for (let nr in this.listeners[eventName]) {
                this.listeners[eventName][nr]();
            }
        }
    }
}

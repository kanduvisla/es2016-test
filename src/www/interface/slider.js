import { Interface } from "../interface.js";

/**
 * Slide interface element
 */
export class Slider extends Interface {
    /**
     * Prepare the interface
     */
    prepare() {
        this.wrapper.innerHtml = 'slider';
    }
}
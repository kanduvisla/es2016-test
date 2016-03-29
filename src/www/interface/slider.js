import { InterfaceObject } from "./../interface.js";
import throttle from 'lodash/throttle';

/**
 * Slide interface element
 */
export class Slider extends InterfaceObject {
    /**
     * Prepare the interface
     */
    prepare() {
        this.wrapper.innerHTML = `<label>
            <span class="name">${this.item.name}</span>
            <input type="range" min="${this.item.min}" max="${this.item.max}" value="${this.item.default}" />
            <span class="value">${this.item.default}</span>
        </label>`;
        this.inputElement = this.wrapper.querySelector('input');
        this.valueElement = this.wrapper.querySelector('.value');

        this.inputElement.addEventListener('change', throttle(::this.inputChangedListener));
    }

    /**
     * Changed listener
     */
    inputChangedListener() {
        this.valueElement.innerHTML = this.inputElement.value;
    }
}
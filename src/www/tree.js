import { Factory } from "../elements/factory.js";
import { InterfaceObject } from "./interface.js";
import { Slider } from "./interface/slider.js";

/**
 * The tree is shown on the side
 */
export class Tree {
    /**
     * Constructor
     */
    constructor() {
        this.wrapper = document.getElementById('tree');
        this.factory = new Factory();
        // Default start values:
        this.configuration = {
            type: 'document',
            options: {
                width: 800,
                height: 800
            }
        };
        this.fill(this.configuration);
    }

    /**
     * Fill the tree
     *
     * @param json
     */
    fill(json) {
        this.wrapper.innerHTML = '';
        var ul = document.createElement('ul');
        this.add(ul, json);
        this.wrapper.appendChild(ul);
        this.json = json;
    }

    /**
     * Add a leaf to the tree
     *
     * @param target
     * @param json
     */
    add(target, json) {
        if (json.type) {
            var li = document.createElement('li');
            li.innerHTML = '<span class="type">' + json.type + '</span>';
            // Interface:
            let child = this.factory.getNode(json.type);
            // @todo render the interface to manage the options
            for (let item in child.interface) {
                let myInterface;
                // Set the name:
                let interfaceItem = child.interface[item];
                interfaceItem.name = item;

                // Check the type:
                switch (interfaceItem.type) {
                    case "slider" :
                        myInterface = new Slider(interfaceItem);
                        break;
                }

                if (myInterface) {
                    myInterface.prepare();
                    myInterface.addEventListener('changed', ::this.update);
                    li.appendChild(myInterface.html);
                }
            }

            // Children:
            if (json.children && json.children.length > 0) {
                var ul = document.createElement('ul');
                for (let i = 0; i < json.children.length; i += 1) {
                    this.add(ul, json.children[i]);
                }
                li.appendChild(ul);
            }
            target.appendChild(li);
        }
    }

    update() {
        console.log('hoi');
    }
}
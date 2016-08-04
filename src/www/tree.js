import {Factory} from "../elements/factory.js";
import {InterfaceObject} from "./interface.js";
import {Slider} from "./interface/slider.js";

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

        if (!json.options) { json.options = {}; }
        interfaceItem.linkedOptions = json.options;

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

      // Attributes:
      if (json.attributes) {
        let table = document.createElement('table');
        for (let key in json.attributes) {
          if (json.attributes.hasOwnProperty(key)) {
            let row = document.createElement('tr');
            let header = document.createElement('th');
            header.innerHTML = key;
            let cell = document.createElement('td');
            // @todo: use interface for this?
            let input = document.createElement('input');
            input.value = json.attributes[key];
            cell.appendChild(input);
            row.appendChild(header);
            row.appendChild(cell);
            table.appendChild(row);
          }
        }
        li.appendChild(table);
      }

      // Children:
      if (json.children && json.children.length > 0) {
        var ul = document.createElement('ul');
        for (let i = 0; i < json.children.length; i += 1) {
          this.add(ul, json.children[i]);
        }
        li.appendChild(ul);
      }
      
      // Options:
      var optionsDiv = document.createElement('div');
      optionsDiv.className = 'options';
      
      
      
      li.appendChild(optionsDiv);
      
      target.appendChild(li);
    }
  }

  /**
   * This method is fired when an input field in the tree has changed of value.
   */
  update() {
    // Re-draw the SVG:
    var svgDocument = this.generator.parse(this.json);

    // Render it in the browser:
    this.document.getElementById('main').innerHTML = svgDocument.render();

  }
}
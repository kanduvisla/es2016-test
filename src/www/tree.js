/**
 * The tree is shown on the side
 */
export class Tree {
    /**
     * Constructor
     */
    constructor() {
        this.wrapper = document.getElementById('tree');
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
        console.log(json);
        this.wrapper.innerHTML = '';
        var ul = document.createElement('ul');
        this.add(ul, json);
        this.wrapper.appendChild(ul);
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
}
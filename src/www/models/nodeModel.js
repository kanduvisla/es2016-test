export class NodeModel
{
  /**
   * Constructor Call
   */
  constructor() {
    this.type = 'node';
    this.attributes = ko.observableArray([]);
    this.interfaces = ko.observableArray([]);
    this.childNodes = ko.observableArray([]);
  }
}
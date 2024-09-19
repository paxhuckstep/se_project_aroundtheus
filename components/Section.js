export default class Section {
    constructor({ items, render}, cssSelector ) {
        //item array
        //render function
        //CSS Selector for adding card elements
    }


    renderItems() {
        //renders all elements by..
        //itterates through item array
        //calls render() on each itteration
        // is called once on page load
    }

    addItem() {
        //takes DOM element and adds it to container
        //is called when adding an individual item
    }

    render() {
        //will be called repeatedly in renderItems
        //probably called in addItem too
    }
}
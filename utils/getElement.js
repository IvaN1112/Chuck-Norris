export default (selection) => {
    const element = document.querySelector(selection);
    if(element) {
        return element;
    } else {
        throw Error ('there is no such element');
    }
}
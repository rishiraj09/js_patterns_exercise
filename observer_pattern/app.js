function Eventobserver() {
    this.observers = [];
}

Eventobserver.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function (fn) {
        // filter out from the list whatever matches the callback function.
        // If there is no match, the callbcak gets to stay on the list.
        // The filter returns a new list and resssigns the list of observers.
        this.observers = this.observers.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire: function () {
        this.observers.forEach(function (item) {
            item.call();
        });
    }
}

const click = new Eventobserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function () {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function () {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', function () {
    click.fire();
});
// Click handler
const getCurMilliseconds = function () {
    console.log(`Current Milliseconds: ${(new Date().getMilliseconds())}`);
}
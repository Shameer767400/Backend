function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log("Clicked:", count);
    };
}
const counter = createCounter();
button.onclick = counter;

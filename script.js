console.log('Hello, world!');

const btn_submit = document.getElementById("submit");


function func1() {
    const btn_result = document.getElementById("button-result");
    function update(item) {
        item.className = "";
    }
    update(btn_result);
    console.log("It's work!");
    const color = document.getElementById("bg-color");
    const size = document.getElementById("size");
    const text = document.getElementById("content-text");
    btn_result.classList.add(color.value, size.value);
    btn_result.textContent = text.value;
    // console.log(color.value);
}
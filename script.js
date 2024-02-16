const btn_submit = document.getElementById("submit");
const content_result = document.getElementById("content-result");
console.log(document.btn_submit);

function update(item) {
    item.className = "";
}

function func1() { // old createButton
    const btn_result = document.getElementById("button-result");
    update(btn_result);
    const color = document.getElementById("bg-color");
    const size = document.getElementById("size");
    const text = document.getElementById("content-text");
    btn_result.classList.add(color.value, size.value);
    btn_result.textContent = text.value;
}

function addButton(color, size, text) { // color, size - имена классов; text - текст кнопки
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = text;
    button.classList.add(color, size);
    document.content_result.appendChild(button);
}

// addButton('red', 'small', 'Кнопка');
// addButton('grey', 'big', 'Кнопка');
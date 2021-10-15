const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", function (e) {
    let paragraph = document.createElement("p");
    paragraph.innerText = inp.value;
    output.appendChild(paragraph);
    inp.value = "";

    paragraph.addEventListener("click", function() {
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function() {
        output.removeChild(paragraph);
    });
});
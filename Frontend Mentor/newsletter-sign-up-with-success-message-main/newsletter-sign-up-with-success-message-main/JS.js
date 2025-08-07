const input = document.getElementById("myInput");
const submit = document.getElementById("submit");
const form = document.getElementById("main-form");
const jump = false;

input.addEventListener("focus", function() {
    if (input.value === "email@company.com") {
        input.value = "";
    }
});

input.addEventListener("blur", function() {
    if (input.value === "") {
        input.value = "email@company.com";
    }
});

submit.addEventListener("mousedown", function() {
    submit.style.backgroundColor = "var(--red)";
})

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const email = formData.get("email");
})
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("message-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(form);

        fetch("your-python-script-url", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            resultDiv.innerText = data;
        })
        .catch(error => {
            console.error(error);
            resultDiv.innerText = "An error occurred.";
        });
    });
});

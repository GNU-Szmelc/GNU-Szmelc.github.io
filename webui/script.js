document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("message-form");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const formData = new FormData(form);

        fetch("https://www.pythonanywhere.com/user/silverx/shares/1e4e0bfb4e6043c69c46fa9070f87e73/", {
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

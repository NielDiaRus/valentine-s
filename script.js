document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var password = document.getElementById("password").value;

    if (password === "31072023") {
        window.location.href = "utama.html"; // Redirect to next page
    } else {
        alert("Cluenya tanggal ci !!!👌.");
    }
});

function respond(answer) {
    if (answer === 'no') {
        alert("Harus Mau 😡😡 ");
    };
}

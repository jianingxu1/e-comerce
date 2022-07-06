window.addEventListener("load", () => {
    document.getElementById("log-in-form").addEventListener('submit', getFormData);
});

// const getFormData = e => {
//     e.preventDefault();

//     var alert = document.getElementById("alert");
//     var form = document.forms("log-in-form");

//     var fields = [...form];
// }


const getFormData = e => {
    e.preventDefault();
    const username = document.getElementById("form-username");
    const password = document.getElementById("form-password");
    const errorUsername = document.getElementById("error-username");
    const errorPassword = document.getElementById("error-password");

    let error = document.createElement('div');
    error.className = "alert alert-danger";
    // si username.value es correcto
    //      si tiene alerta, eliminarla
    // si username.value no es correcto[]
    //      si no tiene alerta, añadirla
    if (username.value === '' || username.value == null) {
        if (!errorUsername.hasChildNodes()) {
            error.innerHTML = "Name is required.";
            errorUsername.appendChild(error);
        }
    }
    else if (errorUsername.hasChildNodes()) {
        errorUsername.removeChild(errorUsername.children[0]);
    }

    if (password.value === '' || password.value == null) {
        if (!errorPassword.hasChildNodes()) {
            error.innerHTML = "Password is required.";
            errorPassword.appendChild(error);
        }
    }
    else if (password.value.length < 8) {
        if (!errorPassword.hasChildNodes())
        error.innerHTML = "Password must be longer than 8.";
        errorPassword.appendChild(error);
    }
    else if (errorPassword.hasChildNodes()) {
        errorPassword.removeChild(errorPassword.children[0]);
    }
}
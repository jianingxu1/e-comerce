window.onload = () => {
    $("#login-form").on("submit", checkFormData);
}

const checkFormData = async e => {
    e.preventDefault();
    
    const popAlert = async text => {
        if (element) {
            if (element.innerHTML !== text) return element.innerHTML = text;
            return;
        }
        var alert = document.createElement("div");
        alert.id = "form-alert";
        alert.className = "alert alert-danger text-center";
        alert.innerHTML = text;
        wrapper.appendChild(alert);
    }

    const cleanAlert = () => {
        if (element) wrapper.removeChild(element);
    }

    var element = document.getElementById("form-alert");
    const wrapper = document.getElementById("login-form");
    const form = document.forms["login-form"];
    let fields = [...form.elements];
    console.log(typeof(element));
    fields = fields.splice(0, fields.length-1);


    if (fields.find(e => e.value.trim() === '' || e.value === null)) {
        console.log(element);
        return popAlert("All fields are mandatory!");
    }

    // check if the account exists
    let username = form["form-username"].value;
    let password = form["form-password"].value;
    let errorMessage = "User credentials are not correct.";
    try {
        let response = (await axios.get(`https://json-server-production.up.railway.app/users?username=${username}`)).data;
        if (!response.length || response[0].password !== password) return popAlert(errorMessage);
        cleanAlert();
        window.location.href = "./html/products.html";
    }
    catch(error) {
        console.log(error);
    }
}

// mismo header y footer en dos paginas html
// implementacion carrito
    // en la misma pagina

// empezar el diseño en mobil y después responsive a desktop o viceversa
// navbar con javascript
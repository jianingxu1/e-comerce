var cardsData = [];
window.onload = async () => {
    await getProducts();
    displayProducts();
    // product = createProduct();
    // await addProduct(product);
}

const getProducts = async () => {
    try {
        cardsData = (await axios.get("https://json-server-production.up.railway.app/products")).data;
    } catch(error) {
        console.log(error);
    }
}

const displayProducts = () => {
    cardsData.forEach((card) => {
        $("#cards").append(
        `<div class="card position-relative" style="width: 18rem">
            <i class="card-heart fa-solid fa-heart fa-2x"></i>
            <img class="card-img-top" src=${card.img} alt=${card.alt}>
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.description}</p>
            </div>
            <div class="card-cart">
                <div class="card-quantity-control">
                    <button class="card-button">-</button>
                    <input type="number" name="card-quantity" class="card-quantity" value="0" min="0" max="1">
                    <button class="card-button">+</button>
                </div>
                <div class="d-flex justify-content-center my-3"><a href="#" class="btn btn-secondary">Add to cart</a></div>
            </div>
        </div>`
        );
    })
}

const createProduct = () => {
    product = {
        id: cardsData.length + 1,
        name: "Hello",
        description: "hello",
        img: "../img/environment-sketching.jpeg",
        alt: "hi",
        price: 100
    }
    return product;
}

const addProduct = async product => {
    try {
        axios.post("https://json-server-production.up.railway.app/products", product);
    } catch(error) {
        console.log(error);
    }
}
const cardsData = [{
    title: "Intro to Character Design",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgSource: "../img/character-design.jpeg",
    imgAlt: "Character design: five sketched medieval male characters"
},{
    title: "Environment Sketching",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgSource: "../img/environment-sketching.jpeg",
    imgAlt: "two sketched environments, the first one is a vehicle interior and the second a classroom"
},{
    title: "Environment Design",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    imgSource: "../img/environment-design.jpeg",
    imgAlt: ""
}]

$(window).on("load", () => {
    addCards();
})

const addCards = () => {
    cardsData.forEach((card) => {
        $("#cards").append(
        `<div class="card position-relative" style="width: 18rem">
            <i class="card-heart fa-solid fa-heart fa-2x"></i>
            <img class="card-img-top" src=${card.imgSource} alt=${card.imgAlt}>
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.text}</p>
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
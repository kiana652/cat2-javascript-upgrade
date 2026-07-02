const specials =[
    {name: "Strawberry delight", price: "ksh 300"},
    {name: "Mint Choco delight", price:"ksh 250"},
    {name:" Tropical Icepop delight", price:"ksh 200"},
    

];
function renderSpecials(){
    const specialsList = document.getElementById("specials-list");

    specials.forEach(function (item){
        const card = document.createElement("article");
        card.classList.add("flavour-card");

        const name = document.createElement("h4");
        name.textContent = item.name;

        const price = document.createElement("p");
        price.textContent = item.price;

        card.appendChild(name);
        card.appendChild(price);

        specialsList.appendChild(card);
    });
}
renderSpecials();

const wishlistInput = document.getElementById("wishlist-input");
const wishlistAddButton = document.getElementById("wishlist-add-button");
const wishlistItems = document.getElementById("wishlist-items");

function addWishlistItem() {
    const flavor = wishlistInput.value.trim();
    if (flavor === "") {
        return;
    }
        const li = document.createElement("li");
        li.textContent = flavor;
        

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
            li.remove();
        });
        li.appendChild(removeButton);
        wishlistItems.appendChild(li);
        wishlistInput.value = "";
}
    
wishlistAddButton.addEventListener("click", addWishlistItem);

const orderForm = document.getElementById("orderForm");
const orderFeedback = document.getElementById("order-feedback");

orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const flavor = document.getElementById("flavor").value;
    const quantity = document.getElementById("quantity").value;

    if (name === ""|| flavor === "" || quantity === "") {
        orderFeedback.textContent = "Please fill in all fields.";
        orderFeedback.style.color = "red";
        return;
    }

    orderFeedback.textContent = "Thank you, " + name + "! Your order for " + quantity + " " + flavor + "(s) has been placed.";
    orderFeedback.style.color = "green";

    orderForm.reset();
});

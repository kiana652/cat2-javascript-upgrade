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

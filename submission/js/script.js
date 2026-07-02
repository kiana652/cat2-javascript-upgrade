const specials =[
    {name: "Strawberry delight", price: "ksh 300"},
    {name: "Mint Choco delight", price:"ksh 250"},
    {name:" Tropical Icepop delight", price:"ksh 200"},
    

];
function renderSpecials(){
    const specialsList = document.getElementById("specials-list");

    specials.forEach(function (item){
        const card = document.createElement("article");
        card.classList.add = ("flavour-card");

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

const produts = [
    {
        name: "Ovo de Páscoa Minions 100g - Kinder",
        price: 90.00,
        image: "./img/ovominions.png",
 
    },
    {
        name: "Ovo de Páscoa Marshall 90g - Delice  ",
        price: 60.00,
        image:"./img/ovopatrulha.png",
 
    },
    {
        name: "Ovo de Páscoa Homem Aranha 150g - Nestle  ",
        price: 70.00,
        image:"./img/ovohomemaranha.png",
 
    },
    {
        name: "Ovo de Páscoa Barbie 166g - Lacta  ",
        price: 100.00,
        image:"./img/ovobarbie.png",
 
    },
    
]
let listaprodutos = "";

produts.forEach(function(produto) {
    listaprodutos += `
        <div class="box">
            <img src="${produto.image}" alt="" class="image">
            <h2 class="name">${produto.name}</h2>
            <span class="price">R$ ${produto.price.toFixed(2)}</span>
            <div>
            <button class="btn">Comprar</button>
        </div>
        </div>
    `;
});

document.getElementById("listaprodutos").innerHTML = listaprodutos;


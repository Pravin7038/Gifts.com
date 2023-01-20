// let cartData = JSON.parse(localStorage.getItem("cart"))||[]
// console.log(cartData)
// let container = document.getElementById("cart-container")

// function display(data){
//     cartData.forEach((product) => {
//         let card = document.createElement("div");
//         let image = document.createElement("img");
//         let name = document.createElement("h3");
//         let price = document.createElement("price")
//         let remove = document.createElement("i");
//         image.src = product.image;
//         name.textContent = product.name;
//         price.textContent = product.price;
//         remove.addEventListener("click",()=>{
//             cartData = cartData.filter((ele)=>{
//                 return ele.name!==product.name
//             })
//             localStorage.setItem("cart",JSON.stringify(cartData))
//             display()
//         });
//         card.append(image,name,price,remove)
//         container.append(card);
//     });
}
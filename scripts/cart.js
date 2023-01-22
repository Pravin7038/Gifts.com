let cartData = JSON.parse(localStorage.getItem("cartdata"))||[]
console.log(cartData)
let qtydiv = document.getElementById("qtycontainer")
if(cartData ===[]){
    empty.textContent = "Your cart is empty"
    display(cartData)
}
let container = document.getElementById("cart-container")
let empty = document.getElementById("empty")

function display(data){
    container.innerHTML = "";
    cartData.forEach((product) => {
        let card = document.createElement("div");
        card.setAttribute("class","card1")
        let card2 = document.createElement("div");
        card2.setAttribute("class","card2")
        let parentcard = document.createElement("div")
        parentcard.setAttribute("id","parentcard")
        let image = document.createElement("img");
        let name = document.createElement("h3");
        let price = document.createElement("h4")
        let remove = document.createElement("button");
        let checkout = document.createElement("button");
        checkout.setAttribute("id","check")
        checkout.textContent = "PROCEED TO CHECKOUT";
        checkout.setAttribute("class", "checkout");
        remove.textContent = "Romove"
        image.src = product.image;
        name.textContent = product.name;
        price.textContent = product.price;
        remove.addEventListener("click",()=>{
            cartData = cartData.filter((ele)=>{
                return ele.name!==product.name
            })
            empty.textContent = "Your cart is empty"
            qtydiv.innerHTML = ""
            localStorage.setItem("cartdata",JSON.stringify(cartData))
            display(cartData)
        });
        checkout.addEventListener("click",()=>{
            window.open(
                "http://127.0.0.1:5500/checkout.html", "_blank");
        })
        card.append(image)
        card2.append(name,price,remove,checkout)
        parentcard.append(card,card2)
        container.append(parentcard);
    });
}
display()
let DataArr = [
    {
        img : "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/161132lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Blooming Love™",
        price : "$74.99-$89.99"
    },
    {
        img : "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/160557spuv5ch29x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Lavender Garden Bouquet",
        price : "$54.99-$79.99"
    },
    {
        img : "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/90577mprsv1sc9x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Assorted Tulip Bouquet",
        price : "$49.99-$91.99"
    },
    {
        img : "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/100547sbdv3ch29x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Magnificent Pink Rose & Lily Bouquet",
        price : "$54.99-$79.99"
    },
    {
        img : "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/140157mpuv5wc2x.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
        name : "Kaleidoscope Roses, 12-24 Stems",
        price : "$59.99-$109.99"
    }
  
  ]

let Slider = document.getElementById("slider")
  function displayData(){
    DataArr.forEach((ele,index)=>{
        let product = document.createElement("div");
        product.setAttribute("class", "prod");
        let image = document.createElement("img")
        image.src = ele.img
        let name = document.createElement("h3")
        name.textContent = ele.name
        let price = document.createElement("h3")
        price.textContent = ele.price
        product.append(image,name,price)
        Slider.append(product)
    })
}
displayData(DataArr);
let loginDone = document.getElementById("login")
    let loginInfo = JSON.parse(localStorage.getItem("done"));
    if(loginInfo!==""){
     loginDone.innerHTML= ""
     let logout = document.createElement("h3");
     let LogoutDone = document.getElementById("logout");
     logout.textContent="Logout"
     LogoutDone.append(logout)

    LogoutDone.addEventListener("click",()=>{
        loginInfo = "";
        localStorage.setItem("done",JSON.stringify(loginInfo));
        location.reload();
   })
    }
    
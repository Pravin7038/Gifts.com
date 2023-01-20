let data = JSON.parse(localStorage.getItem("product"))
let Name = document.getElementById("Name")
data.forEach((element,index) => {
    let h2 = document.createElement("h2")
    h2.append(element.name)
    Name.append(h2)
});
let image = JSON.parse(localStorage.getItem("Image"))
let Card2 = document.getElementById("large")
image.forEach((element,index) => {
    let image = document.createElement("img");
    image.src = element.image
    large.append(image)
});

let Data = [
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
let right = document.getElementById("right");
let left = document.getElementById("left");
let Slider = document.getElementById("slider")
function displayData(){
    Data.forEach((ele,index)=>{
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

//  product.append(image,name,price)
}
displayData(Data);

let addCart = document.getElementById("addCart");
let cartData = JSON.parse(localStorage.getItem("cart"))||[]
addCart.addEventListener("click",()=>{
    localStorage.setItem("cart",JSON.stringify(cartData))
    alert("added successfully")
    console.log(cartData)
})
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  let Data = [
      {
          img : "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191179xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
          name : "Wonderful Wishes™ Bouquet",
          price : "$49.99-$79.99"
      },
      {
        img : "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191168xlx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Daydream Bouquet™",
        price : "$49.99-$79.99"
    },
    {
        img : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/90926mrdv4ch31x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Two Dozen Red Roses",
        price : "$59.99-$94.99"
    },
    {
        img : "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191173xlx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Lovely Lavender Medley™",
        price : "$49.99-$79.99"
    },
    {
        img : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/191113dxx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Fields Of Europe® Bliss",
        price : "$49.99-$79.99"
    },
    {
        img : "https://cdn2.1800flowers.com/wcsstore/Flowers/images/catalog/191179xlx.jpg?height=456&width=418&sharpen=a0.5,r1,t1&quality=80&auto=webp&optimize={medium}",
        name : "Two Dozen Assorted Roses",
        price : "$59.99-$91.99"
    },
    {
        img : "https://cdn3.1800flowers.com/wcsstore/Flowers/images/catalog/176433xlx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Vibrant Floral Medley™",
        price : "$49.99-$79.99"
    },
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
    },
    {
        img : "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/193050stjv3sfh2x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Warm Sunset Bouquet",
        price : "$44.99-$64.99"
    },
    {
        img : "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191238xlx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Key to My Heart®",
        price : "$59.99-$89.99"
    },
    {
        img : "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/144754mpkcv2ws4x.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Assorted Roses & Peruvian Lilies",
        price : "$49.99-$89.99"
    },
    {
        img : "https://cdn1.1800flowers.com/wcsstore/Flowers/images/catalog/191248lx.jpg?width=545&height=597&quality=80&auto=webp&optimize={medium}",
        name : "Victorian Romance™",
        price : "$59.99-$69.99"
    },

  ]
let products = document.getElementById("container")
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
        Card.append(product)
        product.addEventListener("click",()=>{
            window.location.href = "http://127.0.0.1:5500/product.html"
            let productName=[]
            productName.push({name:ele.name});
           
            localStorage.setItem("product",JSON.stringify(productName));

            let productPrice=[]
            productPrice.push({price:ele.price});
            localStorage.setItem("Price",JSON.stringify(productPrice));

            let ProductImg=[]
            ProductImg.push({image:ele.img});
            localStorage.setItem("Image",JSON.stringify(ProductImg));
        })
    })
 

//  product.append(image,name,price)
}
displayData(Data);
    let loginDone = document.getElementById("login")
    let loginInfo = JSON.parse(localStorage.getItem("done"));
    if(loginInfo==""){
        displayData(Data);
    }else{
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






 
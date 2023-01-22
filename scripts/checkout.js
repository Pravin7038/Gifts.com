let submit = document.getElementById("button")
let parent = document.getElementById("cont")
let placed = document.getElementById("placed")
submit.addEventListener("click",()=>{

    let ordered = document.createElement("h1")

    ordered.textContent = "Order Placed Successfully";

    parent.innerHTML = ""
    placed.append(ordered)
})
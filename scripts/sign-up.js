let formEl = document.querySelector("form");
let formdata = JSON.parse(localStorage.getItem("data"))||[];
formEl.addEventListener("submit",(e)=>{
e.preventDefault();
let Data={
    firstName : document.getElementById("First-Name").value,
    lastName : document.getElementById("Last-Name").value,
    email : document.getElementById("email").value,
    password : document.getElementById("pass").value
}
formdata.push(Data)
localStorage.setItem("data",JSON.stringify(formdata))
window.location.href="http://127.0.0.1:5500/sign-in.html"
})
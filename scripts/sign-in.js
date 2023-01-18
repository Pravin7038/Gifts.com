// let Login = document.getElementById("sign-in");
let loginName = document.getElementById("login-name")
console.log(loginName)
let data = JSON.parse(localStorage.getItem("data"));
console.log(data)
let formEl = document.querySelector("form")
let formdata = []
formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    let Data = {
        email : document.getElementById("email").value,
        password : document.getElementById("pass").value,
    }
    formdata.push(Data)
    let flag=false;
        for(let i=0;i<formdata.length;i++){

          for(let j=0;j<data.length;j++){

         if((formdata[i].email===data[j].email) && (formdata[i].password===data[j].password)){
           flag=true;
            break;
         }
        }
    }
    if(flag===true){
        window.open(
            "http://127.0.0.1:5500/index.html", "_blank");
        console.log(loginName.innerHTML)
        
      }else{
       alert("Wrong Credentials")
      }   
})
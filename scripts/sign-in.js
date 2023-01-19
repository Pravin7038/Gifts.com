// let Login = document.getElementById("sign-in");
let data = JSON.parse(localStorage.getItem("data"));
console.log(data)
let formEl = document.querySelector("form")
let formdata = []
let obj = JSON.parse(localStorage.getItem("done"))||"";
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
            obj = data[j].firstName;
            break;
         }
        }
    }
    if(flag===true){
        window.open(
            "http://127.0.0.1:5500/index.html", "_blank");
            localStorage.setItem("done",JSON.stringify(obj))
      }else{
       alert("Wrong Credentials")
      }   
})
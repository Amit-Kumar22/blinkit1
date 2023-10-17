
const button=document.getElementById("btn2");
const button1=document.getElementById("dop");
const ghatu = document.getElementById("ghtu");
const ghatuu = document.getElementById("jhg");
const sign=document.getElementById("signup-form");
const user=document.getElementById("username");
ghatu.style.display="none"
sign.addEventListener("submit", (e)=>{
    e.preventDefault();
    const password=document.getElementById("password").value;
    const confpassword=document.getElementById("confirm-password").value;
    if(password!==confpassword){
        alert("password does not match with confirm password")
    }
    else{
        console.log("amit")
        const name1=user.value;
        console.log(name1)
        ghatuu.style.display="none"
     ghatu.style.display="block"
     button1.innerHTML=`
     <button id="btn2" class="btn"> welcome ${name1}</button>
     `
    }
})
// button.addEventListener("click", (e)=>{
//     e.preventDefault();
//     console.log("amit")
//     // window.location.href="form.html";
//     // button1.style.display="none"
//     // const userData = JSON.parse(localStorage.getItem("user"));
    
// })
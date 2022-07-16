navBtn =document.getElementById("navBtn")
cancel=document.getElementsByClassName("cancel")[0]
navPhone =document.getElementsByClassName("navPhone")[0];

navBtn.addEventListener("click",function(){
    // console.log("hello");

     navPhone.classList.toggle("active")
})

cancel.addEventListener("click",function(){
    // console.log("helo")
    navPhone.classList.remove("active")
})


//signUp handler

var user =document.getElementById("user")
 var number =document.getElementById("number")
 var pass =document.getElementById("pass")
 var pass1 =document.getElementById("pass1")
 var SignUp =document.getElementById("SignUp")
 var Sign =document.getElementById("Sign")


function check(){
  if(user.value !== "" && pass.value !==""){
    Sign.style.backgroundColor="blue"
  }else {
            Sign.style.backgroundColor=" #FFA500"
  }
}
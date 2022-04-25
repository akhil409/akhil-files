//Sample for onclick event
//Ex-1
function sayHello(){
    alert("Hello guys")
}
//Ex-2
//By using this one also works                                  
let btn=document.getElementById("btn1")
  btn.onclick=changeBgc;
//Sample for onclick event
function changeBgc() {
    document.body.style.backgroundColor='black'
}
// //Ex-3
// let btn2=document.getElementById('btn2');
// btn2.addEventListener('click',change);

// function change() {
//     document.body.style.backgroundColor='red'
// }

// //Background color will be red in input 
// let fn=document.getElementById('fullname');
// fn.addEventListener('focus',nff);

// function nff() {
//     nff.style.backgroundColor="red";
// }

let form=document.getElementById('form');

form.addEventListener('submit',function(event){
        event.preventDefault() //It will prevent from auto submitting

        let username=document.getElementById('username').value
        console.log("Username:",username)

        let email=document.getElementById('email').value
        console.log("E-Mail:",email)
})
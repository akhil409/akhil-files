
// //Promises Functions using ALL-Promise
// let promise1=new Promise((resolve,reject)=>{
//     let res=true;
//     if(res){
//           resolve(res);
//     }
//     else{
//        reject(res);
//     }
// });

// let promise2=new Promise((resolve,reject)=>{
//     let res=true;
//     if(res){
//           resolve(res);
//     }
//     else{
//        reject(res);
//     }
// });


// let promise3=new Promise((resolve,reject)=>{
//     let res=true;
//     if(res){
//           resolve(res);
//     }
//     else{
//        reject(res);
//     }
// });


// Promise.all([promise1, promise2, promise3]).then((values)=>{
//     console.log("This is",values);
// }).catch((values)=>{
//     console.log("This is",values);
// });

// //Example will promise ALL
// const pro1=Promise.resolve("This is first Promise");
// const pro2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve("This is second Promise");
//     },2000)
// });
// const pro3=400;
// const pro4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve("This is forth Promise");
//     },3000)
// });

// let proAll=Promise.all([pro1,pro2,pro3,pro4]);
// proAll.then((values)=>{
//      console.log(values)
// }).catch((error)=>{
//      console.log(error)
// });


// ////////PROMISES EXAMPLES
// var promise = new Promise((resolve, reject)=> {
//     const x = 10;
//     const y = "10";
//     if(x === y) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
     
//   promise.then( (value)=> {
//           console.log('Success, You are a GEEK');
//       }).
//       catch((error)=> {
//           console.log('Some error has occurred');
//       });

// //Promises using ANY
// let promise4=new Promise(()=>{
//     setTimeout(() => {
//         console.log("This is slow")
//     }, 5000);
// })

// let promise5=new Promise((resolve)=>{
//     setTimeout(() => {
//         console.log("This is quick")
//     }, 1000);
// });

// let result=[promise4,promise5];

// Promise.any(result).then((value)=>{
//     console.log(value)
// }).catch((value)=>{
//     console.log(value)
// });

// //Promise Example
// let pros=new Promise((resolve,reject)=>{
//     let a1=10;
//     let b1="10";
//     if(a1 === b1){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })

// pros.then((value)=>{
//     console.log("Both numbers are equal")
// }).catch((error)=>{
//     console.log("An Error occur")
// })

// //Promise Chaining
// let promise6=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10);
//     })
// });

// promise6.then((result)=>{
// console.log(result);
// return result * 2;
// }).then((result)=>{
//     console.log(result);
//     return result * 3;
// }).then((result)=>{
//     console.log(result);
//     return result * 4;
// }).then((result)=>{
//     console.log(result);
//     return result * 5;
// });


// //Event Loop Example
// (function(){
//     console.log("This is first message");

//     setTimeout(()=>{
//         console.log("This is message from setTimeOut-1");
//     });
//     console.log("This is just a message")
//     setTimeout(() => {
//         console.log("THis is message from setTimeOut-2");
//     }, 5000);

//     fetch("https://restcountries.com/v3.1/name/peru").then((res)=>{
//         console.log("This is fetch Message",res)

//     });
//     fetch("https://restcountries.com/v3.1/name/united").then(res=>
//         res.json())
//         .then((data)=>{
//             console.log(data)
//         });
    
//     console.log("This is the end message")
// })()

//////////////   XMLHttpRequest Sample   /////////////
let xhttp=new XMLHttpRequest()
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos/1");  //This is a method - Craeting a requeat
xhttp.send();  //sending request to the server

xhttp.onload=()=>{     //onload method will call once the request was completed
    console.log(JSON.parse(xhttp.response)); //.response will get a text formate data but we need JSON formate we use JSON.parse
};

/////////////////
//Sample Beginners
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))

//Modified Type
// fetch('https://reqres.in/api/users?page=2/')
// .then( (res) =>{ 
//     if(res.ok){
//         console.log("Success")
//     }
//     else{
//         console.log("Unsuccess")
//     }
//     res.json() })
// .then( (data1) =>{ console.log(data1) })
// .catch( (error) =>{ console.log(error) })
//Sending data by Using POST Method
// fetch('https://reqres.in/api/users')
// .then( (res1) => { return res1.json() })
// .then( (data2) => { console.log(data2) });

//////////     HTTP Protocols- GET,POST,PUT,DELETE      ///////////

//Fetch Get Request
fetch('https://reqres.in/api/users').then((res2)=>{
    if(res2.ok){
        console.log("GET Request is Successful")
    } else{
        console.log("GET Request is Unsuccessful")
    }
    return res2.json();
}).then( (data3)=>{ console.log(data3) } )
.catch( (error)=>{ console.log(error) } )

//Fetch Post Request
fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name:'UserName1',
        id:120,
        address:'Hydearabad',
        designation:'MERN Stack Developer' 
    })
})
.then( (res) =>{ 
    if(res.ok){
        console.log("POST Request is Successful")
    }
    else{
        console.log("POST Request is Successful")
    }
   return res.json() })
.then( (data1) =>{ console.log(data1) })
.catch( (error) =>{ console.log(error) });

//Fetch Put request
fetch('https://reqres.in/api/users/2',{
    method: 'PUT',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
        name:'UserName1',
        id:120,
        address:'Hydearabad',
        address1:'Chennai',
        designation:'MERN Stack Developer' 
    })
})
.then( (res) =>{ 
    if(res.ok){
        console.log("PUT Request is Successful")
    }
    else{
        console.log("PUT Request is Unsuccessful")
    }
   return res.json() })
.then( (data1) =>{ console.log(data1) })
.catch( (error) =>{ console.log(error) });

//Fetch Delete Request
fetch('https://reqres.in/api/users',{
    method:'DELETE',
    headers: {
        'Content-Type':'application/json'
    }
}).then((res4)=>{
    if(res4.ok){
        console.log("DELETE Request is Successful")
    } else{
        console.log("DELETE Request is Unsuccessful")
    }
    return res4;
}).then((res4)=>{console.log(res4)})

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
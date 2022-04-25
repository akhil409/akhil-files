// // //1.Find the Length of an Array?

// // let arr=[8,4,2,22,10,6,3,9,1,0];
// // console.log("Length of an Array is ",arr.length);

// // //2.find the middle value of array if it there are two numbers,find the number?
// // //Type-1
// // // var arr1 = [21,3];
// // // var value = Math.floor(arr1.length-1)/2;
// // // var 

// // // console.log("Middle value of an array is",arr1[Math.floor(arr1.length-1)/2]) ;

// // //Type-2
// // // let arr2=[1,2,3,4,5,6];

// // // let middleValue=arr2[Math.floor((arr2.length-1)/2)];  //index value
// // // console.log("The index of an middle value is",middleValue)

// // // let result=arr2[middleValue];  //middle value
// // // console.log("The Middle value is ",result);
// // //Type-3

// // let arr3=[1, 8, 9, 4, 6,7]; //If we have even items of array we use (arr.length-1)/2
// // let theMiddle=Math.floor(arr3.length/2-1); // index 2
// // let value=arr3[theMiddle]; // value 9

// // console.log("The index1 of an array is",theMiddle)
// // console.log("The value1 of an array is",value)

// // //3.Find the number whether the given number is even or odd?
// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]%2==0){
// //         console.log("This is an Even number",arr[i]);
// //     }  
// //     else{
// //         console.log("This is an Odd Number",arr[i]);
// //     }
     
// // };

// // 4.//Find the factorial of a given number
// // let givenNum=5;
// // let fact=1;
// // for(let i1=1;i1<=givenNum;i1++){
// //           fact*=i1;   //fact=fact*1
// // };
// // console.log("Factorial of", givenNum,"is",fact); 

// // 5.//Find the sum of all the elements in an array
// // let sum=0;

// // for(let i=0;i<arr.length;i++){
// //     sum+= arr[i];
// // };
// // console.log("The Sum of an arry is",sum);

// // //6.Find the Largest number in an given array
// // let largest=0;

// // for(let i=0;i<arr.length;i++){
// //     if(arr[i]>largest){
// //          largest=arr[i];
// //     }
// // };
// // console.log("The Largest number in an given array is",largest);

// // //7.Find the Smallest number in an given array
// // let smallest=Infinity;

// // for(let i=1;i<=arr.length;i++){
// //     if(arr[i]<smallest){
// //         smallest=arr[i];
// //     };
// // };
// // console.log("The Smallest number in an given array is",smallest);

// // //8.Find the power of an given number without multiplication
// // let base=3;
// // let sum1=base , adder=base; 
// // let power=4;

// // for(let i=1;i<power;i++){
// //     for(let j=1;j<base;j++){
// //         sum1+=adder;
// //     }
// //     adder=sum1;  
// // };
// // console.log("The 4 power of 2 is",sum1);

// // //Second Largest number in an array
// // //Type-1
// // // var arr4 = [20, 120, 111, 215, 54, 78]; // use int arrays

// // //     var max = Math.max.apply(null, arr4); // get the max of the array
// // //     let maxRemove=  arr4.splice(arr4.indexOf(max), 1); // remove max from the array
// // //     let result1=Math.max.apply(null, arr4); // get the 2nd max

// // // console.log("The second largest element in an array is",result1);

// // //Second Larget number in an array
// // //Type-2

// // // let arr5=[4,2,7,5,6,8];
// // // let sortedArray=arr5.sort();
// // // let i;

// // // for(let i = arr5.length - 2; i >= 0; i--){
// // //     if(arr5[i] !=arr5[arr5.length-1]){
// // //         console.log("The second largest element in an array is",arr5[i]);
// // //     }
   
// // // };

// // let arr6=[10,15,71,20,46,24,200,485,100]
// // let largest1=0;
// // let secondLargest=0;

// // for(let i=0;i<arr6.length;i++){
// //     if(arr6[i]>largest1){
// //         secondLargest=largest1;
// //         largest1=arr6[i];
        
// //     } else if(arr6[i]>secondLargest){
// //             secondLargest=arr6[i];
// //     }
// // };
// // console.log("Second Largest element of an array is",secondLargest);

// // //Second Smallest element in an array
// // // let arr7=[0,2,-1,-2,-15,-23,6,1,5,7,10];
// // // let first=0;
// // // let second=0;

// // // for(let i=0;i<arr7.length;i++){
// // //     if(arr7[i]<first){
// // //        second=first;
// // //        first=arr7[i];
// // //     }
// // //      else if(arr7[i]<second && arr7[i]!=first){
// // //           second=arr[i];
// // //      };
// // // };
// // // console.log("Second smallest element in an array is",second);

// // //Functions using Arithemetic Operators
// // function sum3(a,b) {
// //     c=a+b;
// //     console.log("The sum of two values is",c); 
// //     return c;
// // }

// // let sumOfTwo =sum3(10,10);

// // function sub(a,b) {
// //       c=a-b;
// //       console.log("The Subtraction of two values is",c)
// //       return c;   
// // }
// // let subOfTwo = sub(10,10);

// // function mul(a,b) {
// //     c=a*b;
// //     console.log("The multiplication of two is",c);
// //     return c;
// // }
// // let mulOfTwo = mul(10,10);

// // function div(a,b) {
// //     c=a/b;
// //     console.log("The division of two values is",c);
// //     return c;
// // }
// // let divOfTwo = div(10,10);

// // function percen(a,b) {
// //     c=a%b;
// //     console.log("The percent of c is",c);
// //     return c;
// // }
// // let percenOfTwo = percen(10,10);

// // //Functions Logical Operators//
// // function logicalAnd(a,b) {

// //    let condition1=a<b;
// //    let condition2=a>b;

// //     console.log(condition1&&condition2);
// //     console.log(condition2||condition2);
    
// // }

// // logicalAnd(10,9);

// // //Functions of Second Smallest number
// // function secondSmallest(arr7,first,second) {

// // for(let i=0;i<arr7.length;i++){
// //     if(arr7[i]<first){
// //        second=first;
// //        first=arr7[i];
// //     }
// //      else if(arr7[i]<second && arr7[i]!=first){
// //           second=arr[i];
// //      };
     
// // };
// // console.log("Second smallest element in an array is",second);

// // }

// // let arr7=[0,2,-1,-2,-15,-23,6,1,5,7,10];
// // let first=0;
// // let second=0;

// // secondSmallest(arr7,first,second);

// // //IIFE Function
// // (
// //     function(){
// //         console.log("This is IIFE function");
// //     }
// // )()

// // //Named Function
// // function abc() {
// //     console.log("This is a Named Function");
// // }
// // abc();

// // //Var Let Const Scopes
// // let a=10;

// // function f() {
// //     let a=20
// //     console.log("This is a function of a value",a);
    
// //     function f2()
// //      {
// //          let a=30
// //         console.log("This is function of a function value",a)
// //     }
// //     f2();
// // };
// // f();

// // /////
// // true;
// // var a1=11;
// // if(true){
// //   var a1=10;
// //   let b=20;
// //   const c=30;
// //     console.log("Block",a)
// //     console.log("Block",b)
// //     console.log("Block",c)
// // }
// // console.log("outside",a1);

// // //Arrow Functions
// // let test=(a,b)=>{
// //     return a+b;
// // }
// // console.log(test(10,10));

// //Hoisting Test
// console.log(num1);
// var num1=6;
// console.log(num1);

// function empObj(title){
//     this.title=title;
// };

// let result=new empObj("a");

// //////////Object with testing shallow and deep copy
// //Deep Copy
// var employee = {
//     eid: "409",
//     ename: "Akhil",
//     eaddress: "Hyderabad",
//     salary: 50000
// }
// console.log("Employee=> ", employee);
// var newEmployee = JSON.parse(JSON.stringify(employee));    // Deep copy
// console.log("New Employee=> ", newEmployee);
 
// console.log("---------After modification----------");
// newEmployee.ename = "Alladi";
// newEmployee.salary = 65000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);

// //Shallow Copy
// var employee = {
//     eid: "409",
//     ename: "Akhil",
//     eaddress: "Hyderabad",
//     salary: 50000
// }
// console.log("Employee=> ", employee);
// var newEmployee = employee    //Shallow Copy
// console.log("New Employee=> ", newEmployee);
 
// console.log("---------After modification----------");
// newEmployee.ename = "Alladi";
// newEmployee.salary = 65000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);


// ///////////Array Destructuring
// ///Example
// var colors=["Red","Violet","Green","Orange","Indigo","White","Black"];

// var[color1,,color3,...args]=colors;

// console.log(color1); //Red
// console.log(color3); //Green
// console.log(args);  // ['Orange', 'Indigo', 'White', 'Black']

// ///Example
// var col=["Red","Violet","Green","Orange","Indigo","White","Black"];
 
// var[one,,three,four]=col;
// console.log(one);
// console.log(three);
// console.log(four);

// ///////////
// const num={x:100,y:200}
//  const{x,y}=num;
//  console.log(x);
//  console.log(y);

// const student = {name: 'Akhil', position: 'Second', rollno: '409'};  
// const {name, position, rollno} = student;  
// console.log(name); 
// console.log(position); 
// console.log(rollno);

// let {a10,b,...args1}={a10:10,b:20,c:30,d:40,e:50}
// console.log(a10);;
// console.log(b);
// console.log(args1);


// var x1=7;

// function getName(){
//     console.log("Testing Hositing");
// };

// var getName2=()=>{
//     console.group("This is getName-2")
// }

// getName(); 
// console.log(x1); 
// console.log(getName); 

// function getName3(a9,b9){
//      c9=a9*b9;
//      console.log("This is function",c9)
// }
// getName3(10,10);

// var getName4=(a11,b11)=>{
  
//  return    a11+b11;
// }

// var result4=getName4(10,10);
// console.log(result4); 

///// Array Methods /////

let arr=[10,20,30,40,50,60];
console.log(arr);
console.log(arr.length);
//Passing element to the last one
arr.push(70);
console.log("Passing element to the last one",arr);
//Passing element to the first one
arr.unshift(80);
console.log("Passing element to the first one",arr);
//Removing element to the last one
arr.pop();
console.log("Removing element to the last one",arr);

let element=arr.pop();
console.log(element);
//Removing elemtn  in the first one
arr.shift();
console.log("Removing element in the first one",arr);

//Higher Order functions
let func1=(num)=>{
    return 5 + num;
};

let f=func1;
func1(5); //10
console.log(func1(5));
f(6);    //10
console.log(f(6));

/////
function a(b){
    b();
    return function(){
        console.log("Output from A")
    }
};

a(b);
let c=a(b);
console.log(c);
function b(){
    console.log("Output from B")
};

//  let username=()=> 'Username';
//  console.log(username())

 let subject=function () {
         return 'Higher order function'
 };
 console.log(subject());

 //Map Method Function
 let arr8=[1,2,3,4,5,6];
 let output=arr8.map((element)=>{
     return element*2;
 });
 console.log(output);

 //Filter Method Function
 let output1=arr8.filter((element)=>{
     return element>3;
 });
 console.log(output1);

 //For-Each Method Function
 let output2=arr8.forEach((element)=>{
     
     console.log(element);
 });

 //Reduce Method Function
 let output3=arr8.reduce((accumulator,currentValue)=>{
     return accumulator + currentValue;
 });
 console.log(output3);

 //Call Back Function
 let username=()=> {'Username'};
 
 function a(b) {
     b();
     return function(name){
        console.log("This is F1",name)
     }
      
 };

 function b() {
     console.log("This is F2")
 };

 let c1=a(b);
 c1("Akhil");

 //First class Functions
 let add=(num)=>{
     return num+1;
 };
 
 function numbers(fn,x) {
     return fn(x);
 };

 let result2=numbers(add,5);
 console.log(result2);

 function x1() {
     console("This is name one function")
 };

 function y1(x1) {
     
     
 };

 y1();

 ////Async and Await
 console.log("This is 1");
 console.log("This is 2");
//Set TimeOut
setTimeout(function(){
    console.log("This is 3");
 },5000)

 console.log("This is 4");
//Set Interval
setInterval(() => {
    console.log("This is 5");
}, 3000);
 console.log("This is 6");

 //Promises
c

 p1.then(function(val){
     console.log(val)
     ;}).catch(function(val){
         console.log(val);
 });
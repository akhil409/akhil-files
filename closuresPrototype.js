// // ///////////////////     CLOSURES     /////////////////////
// //We can put a function inside a function just like this
function x(){ 
    let a=2 
    function y() {        
        console.log("The Output is",a)       
    }
    y() 
}
x();

// // ////// We can Assign a Function to a variable just like this /////////
function x1(){ 
    let p=10
    let a1 = function y1() {        
        console.log("The Output is",p)       
    }
     a1();
     
}
x1();

// ///////We can pass the function inside the function as a parameter////////

function x2(){ 
    let a2=2 
    //  y2()    
}
x2(function y2(){        
    console.log("The Output is",a2)       
});

// //We can put return function inside a function just like this
function x3(){ 
    let a3=2 
   return function y3() {   
       a3++    //We can put the return here and also after the function too, both behaves same    
        console.log("The Output is",a3)       
    }
    // return y;
}

let z1=x3();
////.........Even if we call this function afrer 1000 lines it will execute the funciton
z1();

// //
function x4(){ 
    let a4=2 
  function y4() {       
        console.log("The Output is",a4)       
    }
    a44=10  //Here a is the reference to that variable, because of the closue we get the a=10 even though a=2 at the parent function
    return y4;
}

let z2=x4();
console.log(z2);
////.........Even if we call this function afrer 1000 lines it will execute the funciton
z2();

////Functions with in a fucntions - Nested Functions
let c=200
function z() {
    b=100
    function x(){ 
        let a=2 
      function y() { 
          d=300      
            console.log("The Output is",a,b,c,d)       
         }
      y()
     }
  x()  
}
z();

//
function fun()  {  
var e = 4; // 'e' is the local variable, created by the fun()  
function innerfun() // the innerfun() is the inner function, or a closure  
      {  
        return e;  
      }  
return innerfun;  
} 

let output = fun(); 

console.log(output());
// document.write(output());  

//Function with in a function with passing parameters
function fun1(a)  
{  
function innerfun1(b){  
return a*b;  
}  
return innerfun1;  
}  
let output1 = fun1(4);  //Here output1 is the closure
console.log(output1(1))

///////////////////////////////     PROTOTYPE     //////////////////////
//Function constructor              //Reference: https://www.programiz.com/javascript/prototype
function Person(){
    this.name="akhil",
    this.no=245
}

let con=new Person();
console.log(con.name);
console.log(Person.prototype);     // checking the prototype value

// constructor function
function Person1(eno,age,marks) {
    this.eno=eno,
    this.age=age,
    this.marks=function(){      //method
        console.log("Hellow world")
    }
}

let con1=new Person1(101,25);      // creating objects
let con2=new Person1(101,25);      // creating objects
console.log(con1)
Person1.prototype.place="Chirala"  // adding property to constructor function
console.log(Person1.prototype)     // prototype value of Person1
console.log(con1.place);          // inheriting the property from prototype
console.log(con1)


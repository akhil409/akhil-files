//Arithematic Operators

//Addition
let a=10;
let b=10;
let c=a+b;

// y=document.getElementsByName("h2");
// console.log("Data is",y[1].innerHTML);

document.getElementById("dem1").innerHTML= `Addition is ${c}`;
console.log("Addition is ",c);

//Subraction
let sub1=10;
let sub2=10;
let sub3=sub1-sub2;

document.getElementById("dem2").innerHTML=`Subtraction is ${sub3}`;
console.log("Subtraction is",sub3);

//Multiplication
let mul1=10;
let mul2=10;
let mul3=mul1*mul2;

document.getElementById("dem3").innerHTML=`Multiplication is ${mul3}`;
console.log("Multiplication is",mul3);

//Division (Quadrant)
let div1=10;
let div2=10;
let div3=div1/div2;

document.getElementById("dem4").innerHTML=`Division is ${div3}`;
console.log("Division is",div3);

//Percentage (Remainder)
let per1=10;
let per2=10;
let per3=per1%per2;

document.getElementById("dem5").innerHTML=`Percentage is ${per3}`;
console.log("Percenatge is",per3)

//Logical Operators

let a1=10;
let b1=20;
let condition1=a1>b1;
let condition2=a1<b1;

document.getElementById("dem6").innerHTML=`And result is ${condition1&&condition2}`;
document.getElementById("dem7").innerHTML=`Or result is ${condition1||condition2}`;
document.getElementById("dem8").innerHTML=`Not-equal to result is ${a1!=b1}`;
document.getElementById("dem9").innerHTML=`Not-equal to with type reulst is ${a1!==b1}`

console.log("And result is",condition1&&condition2);
console.log("Or result is",condition1||condition2);
console.log("Not-equal to result is",a1!=b1);
console.log("Not-equal to with type reulst is",a1!==b1);

//Ternary Operator
let a2=10;
let b2=9;

let result1=a2<=b2?"True":"False";
console.log("Ternary operator result is",result1);

//Comparision Operators
let a4=10;
let b4="10";
console.log("Result with === is",a4===b4);

let a5=10;
let b5=10;

console.log("Result with == is",a5==b5);
console.log("Result with === is",a5===b5);
console.log("Result with != is",a5!=b5);  // 
console.log("Result with !== is",a5!==b5);  // 
console.log(a5>b5);   //false
console.log(b5<a5);   //false
console.log(a5>=b5);  //true
console.log(b5<=a5);  //true


//Ternary Operator by using logical operator
let a3=10;
let b3=9;
let condition3=a3>b3;
let condition4=a3<b3;

let result2=condition3&&condition4?"true":"false";
console.log("Ternary operator using logical operator result is",result2);



// let f = 5;
//            4    3   3   2   3
// console.log(--f, --f, f--, ++f);    


//Increment and Decrement operators with Pre-Increment & Post-Increment
let f=5;
console.log("Result of f values",f++,f--,--f,++f,f--,f);

let a11=5;
let b11=6;
console.log("Result of a&b",a11+b11,a11+(++b11),a11-(b11--),a11*b11);

let a12=7;
let b12=8;
let c12=9;
console.log("Result of a&b&c",a12+(++b12)+(c12--),(++a12)+b12+c12,c12-(--a12)-(--b12),a12*b12*c12);

let a13=7;
let b13=10;
let c13=11;
let d13=5;
console.log("Result of a&b&c&d",a13+b13+c13+d13,a13+(++b13)+c13+(--d13));

//Examples of Plus two increments
let a14=10;
let b14=12;

console.log("Plus two equal to problems",a14+=2,a14-=2,a14/=2,a14%=2,a14*=2); 
console.log("Plus two equal to problems",b14+=2,b14-=2,b14/=2,b14%=2,b14*=2); 




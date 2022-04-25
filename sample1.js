// ///Control statemenst or Decision Making Statements like if, else if, else
// //Example:1
// // let a=10;
// // let b=20;

// // if(a>=20){
// //         console.log("You can signup");
// // }
// // else{
// //     console.log("You need atleast 18 to sign up");
// // }

// // Example:2
// // let age=17;

// // if(age>20){
// //     console.log("You are an adult");
// // }
// // else if(age>=24 && age<=20){
// //      console.log("Your age in between 20 to 24")
// // }
// // else{
// //     console.log("You are not a adult")
// // }

// //Example:3
// let marks=35;

// if(marks>90){
//     console.log("You have got the A Grade");
// }

// else if(marks>75){
//      console.log("You have got the B Grade");
// }

// else if(marks>65){
//     console.log("You have got the C Grade");
// }

// else if(marks>55){
//     console.log("You have got the D Grade");
// }

// else if(marks>45){
//     console.log("You have got the E Grade");
// }

// else if(marks>35){
//     console.log("You have got the F Grade");
// }

// else{
//     console.log("Failed");
// }

// //Switch Statments
// //Example-1
// let a21=2;

// switch(a21){
//     case 1:
//         a21='One';
//     break;

//     case 2:
//         a21='Two';
//     break;
    
//     default:
//         a21='Not found';
//     break;
// };

// console.log(`The value of A is ${a21}`);

// //Example-2
// let day=2;
// let dayName;

// switch(day){
//     case 1:
//         dayName='Monday';
//     break;
//     case 2:
//         dayName='Tuesday';
//     break;
//     case 3:
//         dayName='Wednesday';
//     break;
//     case 4:
//         dayName='Thursday';
//     break;
//     case 5:
//         dayName='Friday';
//     break;
//     case 6:
//         dayName='Saturday';
//     break;
//     case 7:
//         dayName='Sunday';
//     break;
//     default:
//         dayName='Not Found';
//     break;
// }
// console.log(`The day is ${dayName}`);

// //Example-3
// // let num1=10;
// // let num2=10;
// // let num3=num1+num2;

// // switch(num3){
// //     case 1:
// //          num3
// //     break;
// //     default:
// //           num3="Not found";
// // };

// // console.log(`the value of num3 is ${num3}`);


// // Javascript Objects Examples-Types of creating Objects
// //Creating a Object-1
// let stud={
//             Eno:409,
//             Name:"Akhil Kumar",
//             Department:"ECE",
//             Percentage:61.56,
//             Designation:"MERN Stack Developer",
//             Salary:55000,
//             Address:"7-5-62/2,Santhi Nagar,Perala, Chirala"
// };

// stud.Sex="Male"; //Adding a data to the existing Object
// // delete stud.Eno;  //Deleting a data to the existing Object

// console.log(stud.Eno+"  "+stud.Name+"  "+stud.Department+"  "+stud.Percentage+"  "+stud.Designation+"  "+stud.Salary+" "+stud.Address+" "+stud.Sex);

// //Creating a Object-2
// let stud1=new Object();
//     stud1.eno=400;
//     stud1.name="Kumar";
//     stud1.department="CSE";
//     stud1.percentage=68.5;
//     stud1.salary=60000;
//     stud1.address="Santhi Nagar, Nellore";

// console.log(stud1.eno+" "+stud1.name+" "+stud1.department+" "+stud1.salary+" "+stud1.address+" "+stud1.percentage+" "+stud1.sex);

//Creating a Object-3
// function employee(name1,salary1,designation1){
//       this.name1=name1;
//       this.salary1=salary1;
//       this.designation1=designation1;
// }

// let result3=new employee("Akhil",62000,"MERN Satck");

// console.log(result3.name1+" "+result3.salary+" "+result3.designation1);

// //Loops Iterartions using Arrays
//  let data=[10,20,30,40,50,60,70,80,90,100];

// index=0;

//  //For Loop
//  for(let index=0;index<data.length;index++);
//  {
//        console.log(data[index]);
//  }
 
// // //While Loop
//  while(index<=3){
//      console.log("Elements of while loop",data[index]);
//      index++;
//  }

// //  //For Of Loop
//  for(let element of data){
//      console.log("The values in array",element);
//  }

// //  //For In Loop
//  for(let index in data){
//          console.log("Value of index",index,"is",data[index]);
//  }

// //  //For Each Loop
// data.forEach((element)=>{
//     console.log("Elements of each element",element);
// });


//Practise Date:28-03-2022
// for(let i=1; i<5; i++) {
//     console.log("Values for For LOOP++",i); 
// }

// for(let i=1; i>-5; i--) {
//     console.log("Values for For LOOP--",i); 
// }
// console.log("3 *"+"",i+" =",3*i);

let i=1;
for(let i=1;i<=10;i+=1){
    console.log("3 x",i," =",3*i);
}


//While LOOP
let a=1;
while(a<=10) {
    console.log("While loop values",a);
    a=a+2   ;
};


//Objets Examples-1
let obj = {
    firstName: {
        name1 : "akhil",
        name2 : {
            name3 :"Background",
        },
    },

    lastname: {
        lastname1:"Apple",
        lastname2:{
            lastname3:"Mango",
        }
    }
    
};

let str = 'lastname';
// console.log(obj['firstName']["name2"]['name3']);
console.log(obj["lastname"]["lastname2"]["lastname3"]);

//Objets Examples-2 (Objects in Object)
let fruit={
    fruit1:{
        fruit11:"Apple",
        fruit12:"Orange",
        fruit13:{
            fruit131:"Pineapple",
            fruit132:"Watermelon",
        },
    },
    fruit2:"Banana",
    fruit3:{
           fruit31:"Cherry",
           fruit32:"strawberry",
           fruit321:{
               fruit3211:"Kiwi",
           }
    },
    fruit4:"Carrot"
};

// let stry = 'fruit3'; //reference variable-object will print
// console.log(fruit[stry])

console.log(fruit["fruit1"]["fruit13"]["fruit132"]);
console.log(fruit["fruit3"]["fruit321"]["fruit3211"]);
// console.log(fruit.fruit1.fruit13.fruit132);
// console.log(fruit.fruit3.fruit321.fruit3211);

//Array Examples
let arr=[23,45,15,86,34,562,75,18,59,22] ;

//FOR LOOP
for(let index=1;index<=arr.length;index+=2){
    console.log("Values of array using FOR LOOP1",index);
};
console.log("Length of an arry",arr.length); //
console.log("First element of the array uisng index",arr[0]);
console.log("Last element of the array",arr[arr.length-1]);
// arr.push(100); Adding new element to the array
// arr.pop(100);  Removing the element from the array
// console.log("Push th element",arr.length);

//WHILE LOOP
let arr1=[45,24,82,75,36,49,15] ;

let index1=1;
while(index1<=arr1.length){
      console.log("Values of array using WHILE LOOP",index1);
      index1++;
}

//FOR OF LOOP
for(let element of arr1){
    console.log(element);
};

//FOR IN LOOP
for(let index in arr1){
    console.log("Value of index",index,"is",arr1[index]);
};

//FOR EACH LOOP
arr1.forEach((element)=>{
    console.log("For each values",element);
});

//Do-While LOOP
let i1=1;

do{
    console.log("Do While Loop Values",i1);
    i1++;
}
while(i1<=10);
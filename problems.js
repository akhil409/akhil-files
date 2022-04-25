////           Problem 28/03/2022           ////
//1.Find the Length of an Array?
let arr=[8,4,2,22,10,6,3,9,1,0];
console.log("Length of an Array is ",arr.length);

//2.find the middle value of array if it there are two numbers,find the number?
//Type-1
let arrMid = [21,3];
// let value = Math.floor(arrMid.length-1)/2;

console.log("Middle value of an array is",arrMid[Math.floor(arrMid.length-1)/2]) ;

//Type-2
let arrMid1=[1,2,3,4,5,6];

let middleValue=arrMid1[Math.floor((arrMid1.length-1)/2)];  //index value
console.log("The index of an middle value is",middleValue)

let result=arrMid1[middleValue];  //middle value
console.log("The Middle value is ",result);

//Type-3
let arrMid2=[1, 8, 9, 4, 6,7]; //If we have even items of array we use (arr.length-1)/2
let theMiddle=Math.floor(arrMid2.length/2-1); // index 2
let value=arrMid2[theMiddle]; // value 9

console.log("The index1 of an array is",theMiddle)
console.log("The value1 of an array is",value)

//3.Find the number whether the given number is even or odd?
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log("This is an Even number",arr[i]);
    }  
    else{
        console.log("This is an Odd Number",arr[i]);
    }
     
};

//4.Find the factorial of a given number
let givenNum=5;
let fact=1;
for(let i1=1;i1<=givenNum;i1++){
          fact*=i1;   //fact=fact*1
};
console.log("Factorial of", givenNum,"is",fact); 

//5.Find the sum of all the elements in an array
let sum=0;

for(let i=0;i<arr.length;i++){
    sum+= arr[i];
};
console.log("The Sum of an arry is",sum);

//6.Find the Largest number in an given array
let largest=0;

for(let i=0;i<arr.length;i++){
    if(arr[i]>largest){
         largest=arr[i];
    }
};
console.log("The Largest number in an given array is",largest);

//7.Find the Smallest number in an given array
let smallest=Infinity;

for(let i=1;i<=arr.length;i++){
    if(arr[i]<smallest){
        smallest=arr[i];
    };
};
console.log("The Smallest number in an given array is",smallest);

//8.Find the power of an given number without multiplication
let base=3;
let sum1=base , adder=base; 
let power=4;

for(let i=1;i<power;i++){
    for(let j=1;j<base;j++){
        sum1+=adder;
    }
    adder=sum1;  
};
console.log("The 4 power of 2 is",sum1);

//Second Largest number in an array
//Type-1
var arrLarg = [20, 120, 111, 215, 54, 78]; // use int arrays

    var max = Math.max.apply(null, arrLarg); // get the max of the array
    let maxRemove=  arrLarg.splice(arrLarg.indexOf(max), 1); // remove max from the array
    let resultLarg=Math.max.apply(null, arrLarg); // get the 2nd max

console.log("The second largest element in an array is",resultLarg);

//Second Larget number in an array
//Type-2
let arr5=[4,2,7,5,6,8];
let sortedArray=arr5.sort();
let i;

for(let i = arr5.length - 2; i >= 0; i--){
    if(arr5[i] !=arr5[arr5.length-1]){
        console.log("The second largest element in an array is",arr5[i]);
    }
};

//Type
let arr6=[10,15,71,20,46,24,200,485,100]
let largest1=0;
let secondLargest=0;

for(let i=0;i<arr6.length;i++){
    if(arr6[i]>largest1){
        secondLargest=largest1;
        largest1=arr6[i];
        
    } else if(arr6[i]>secondLargest){
            secondLargest=arr6[i];
    }
};
console.log("Second Largest element of an array is",secondLargest);

//Second Smallest element in an array
let arr7=[0,2,-1,-2,-15,-23,6,1,5,7,10];
let first=0;
let second=0;

for(let i=0;i<arr7.length;i++){
    if(arr7[i]<first){
       second=first;
       first=arr7[i];
    }
     else if(arr7[i]<second && arr7[i]!=first){
          second=arr[i];
     };
};
console.log("Second smallest element in an array is",second);


//          Problem-1 04/05/2022       //
let arry=[1,2,3,4,5,6,7,8];
//Type-1
arry.sort(compareFunction);
console.log(arry);

function compareFunction(a,b) {
    //1. < 0 .... a comes first
    //2. 0 .... nothing will be changed
    //3. > 0 .... b comes first
    return b-a;
};
//Type-2
let sortedArrayAsc=arr.sort((a,b)=>{
    //1. < 0 .... a comes first
    //2. 0 .... nothing will be changed
    //3. > 0 .... b comes first
    return a-b;
});
console.log(sortedArrayAsc);;

let sortedArrayDes=arr.sort((a,b)=>{
    return b-a;
});
console.log(sortedArrayDes);

//Problem-1(2)//
let arr1=[{name:"Akhil",age:20},
          {name:"Uday",age:22},
          {name:"Rahul",age:25}]

let sortedArrayObj=arr1.sort((a,b)=>{
    return b.age - a.age;
});

let sortedArrayObj1=arr1.forEach((e)=>{
    console.log(`${e.name} ${e.age}`);
})
console.log(sortedArrayObj);
////////////////////////////////////////////////////////////////////////
//            Problem-2 06/04/2022           //
//1.
let arrStr=["akhil","rahul"];
let resultStr=arrStr.map((element)=>{
    return  element[0].toUpperCase() + element.slice(1).toLowerCase()
})
console.log(resultStr);

//2.
let evenNum=[1,2,3,4,5,6]
let resultEven=evenNum.filter((element)=>{
    return element%2===0;
});
console.log("Even numbers in an array is",resultEven);
//3.
let resultSum=evenNum.reduce((accumulator,currentvalue)=>{
    return accumulator + currentvalue;
});
console.log("The Sum  of the given array is",resultSum);

////      Problem-3 08/04/2022      ////
////Type-1////
let arr2=[1,1,1,2,2,5,7,1,3,5]

let obj={}

for(let element in arr2){
    if(obj[arr2[element]]){
        obj[arr2[element]]++
    } else{
        obj[arr2[element]]=1
    }
}

console.log("Properties in Objects",Object.keys(obj));
console.log("Values in Objects",Object.values(obj));

/////Type-2/////
let obj1=arr2.reduce((a,b)=>{
    if(a[b]){
        a[b]++
    } else{
        a[b]=1
    }
    
    return a;
    
},{});
console.log("Properties & Values in an array",obj1);

//Remove Duplicates in an Sorted Array//
let nums=[1,1,1,2,2,5,7,1,3,5]; //1 2 3 5 7
let nums1=nums.sort((a,b)=>{
    return a-b;
})
console.log(nums1)
let removeDuplicates = function(nums1) {
    if(nums1.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums1.length; j++){
        if(nums1[j] !== nums1[i])            
           i++;            
           nums1[i] = nums1[j];
    }
    
    return nums1.slice(0, i+1);
};

console.log(removeDuplicates(nums1));

////      Problem-4 11/04/2022      ////
//Sort the Array using Frequency
let arr3=[1,1,1,2,2,2,5,7,3,2,1]

let obj2=arr3.reduce((a,b)=>{
    
   if(a[b]){
       a[b]++
    } 
   else {
       a[b] = 1
    }
   return a

},{});
console.log(obj2);

let arrObj=Object.keys(obj2).map((element)=>{
    return {
        name:element,
        count:obj2[element]
    }
});

console.log(arrObj);

let result1=arrObj.sort((a,b)=>{
          if(a.count === b.count){
              return a.name - b.name
          } else{
              return a.count - b.count
          }
});

console.log(result1.map((element) => element.name));

////        Problem-5 12/04/2022      ////
//// Type-1 ////
let numDiff=[1,2,3,4,5,7,10,15,20]  //[1,1,1,1,2,3,5,5] https://stackoverflow.com/questions/30399123/finding-difference-between-consecutive-numbers-in-an-array-in-javascript

    let newArr = [];
    for (let i=1;i<numDiff.length;i++) 
        newArr.push(numDiff[i] - numDiff[i - 1]); 

console.log(newArr);

// /// Type-2 ///
// var a = [1,2,3,4,5,7,10,15,20] ;
// function diff (arr){
//     diffArr=[];
//     for(var i=0; i<arr.length-1; i++){
//         diffArr.push(arr[i+1]-arr[i]);

//     }
//     return diffArr;
// }
// alert(diff(a));

//Find the Prime numbers in between 1 to 100  Reference: https://www.youtube.com/watch?v=adwXqP_rp4M
function primeNum() {
    let givenNum=100;
    let ar=[];
    let isPrime;
    for(let i=2;i<=givenNum;i++){
        isPrime=1;
        for(let j=2;j<i;j++){
               if(i%j===0){
                isPrime=0;
                break;
               } 
        }
        if(isPrime===1){
            console.log(i);
            ar.push(i);
           
        }
    }
    console.log("Prime numbers in Array are",ar)
};
primeNum();

//Palindrome
// let givenStr='AKHIL'
// let newString=''
// console.log(givenStr.length)

// for(let i=0;i<=givenStr.length;i++){
//      rString=givenStr[i];
//      result=newString[rString]
//     //  result=newString.push(givenStr[i])
     
//      console.log(rString)

//     //  if(newString === result){
//     //      console.log('Its a Palindrome')
//     //  } else{
//     //      console.log('It is not a palindrome')
//     //  }
// }

///////        Problem-6 19/04/2022   ////////
//Palindrome
function palindrome(string) {
    let len=string.length

    for(let i=0; i<len/2; i++){
        if(string[i]!==string[len-1-i]){
            return 'It is not a palindrome'
        }
        else{
            return 'It is a palindrome'
        }
    }
};

let value1=palindrome('TENET'); //MALAYALAM HANNAH LEVEL TENET MADAM RADAR
console.log(value1)

//Implement Binary search in an sorted array
// const values=[0,1,2,3,4,5,6,7,8,9,10];
// Number of loops here
// const search=(val,arr)=>{
//    for(let i=0;i<arr.length;i++){
//        if(val==arr[i]){
//            return i;
//        }
//    }
//    return 'Not found'; //It means we ar noit able to find the element in an array
// }

// console.log(search(7,values));

const values=[0,1,2,3,4,5,6,7,8,9,10];  //Reference: https://www.youtube.com/watch?v=7lGiPItOVCM    2.https://www.programiz.com/javascript/examples/palindrome

const binary=(val1,arry1)=>{
    let lower=0;               //Divide the array into two parts one is lower
    let upper=arry1.length-1;  // upper

    while(lower <= upper){
        console.log('Loop')  //Less loops here
           let midd=lower+Math.floor((upper - lower)/2);  //Finding the middle value in an array

           if(val1 === arry1[midd]){
                return midd;
           }

           if(val1 < arry1[midd]){
              upper = midd - 1;
           } else{
               lower = midd + 1; 
           }
    }

    return 'Not found';
};

console.log(binary(10,values));

// //Left and Right array sorted    //Reference: https://www.youtube.com/watch?v=x_Z9FcAPmbk
// let merge=(leftArr,rightArr)=>{  //Reference: https://flaviocopes.com/merge-sort-javascript/#:~:text=Merge%20sort%20is%20a%20sorting,to%20arrays%20of%201%20element.
//       let output=[];
//       let leftIndex=0;
//       let rightIndex=0;

//       while(leftIndex < leftArr.length || rightIndex < rightArr.length){
//           let leftEl = leftArr[leftIndex];
//           let rightEl= rightArr[rightIndex];

//           if(leftEl < rightEl){
//               output.push(leftEl);
//               leftIndex++;
//           } else{
//               output.push(rightEl);
//               rightIndex++;
//           }
//       }

//       return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
// };

// console.log(merge([3,6],[8,7]))

// // //Recursive Function
// // let mergeSort = array =>{
// //     if(array.length<=1){
// //         return array
// //     }
// //     let middleIndex = Math.floor(array.lenght/2);
// //     let leftArr = array.slice(0,middleIndex);
// //     let rightArr = array.slice(middleIndex);

// //     return merge(
// //         mergeSort(leftArr),
// //         mergeSort(rightArr)
// //     )
// // }

// // mergeSort([2,7,5,4,3]);

//Recursive Sample
let num=1
function abc() {
    console.log('Hello',num);
    num++
    if(num<=10)
    abc()
}
abc()

/////     Problem-7 20-04-2022     /////
//Print a left triangle pattern
//Type-1//
let givenNum1 = 5;              //Reference: https://www.tutorialstonight.com/js/javascript-star-pattern.php
let string = "";
for (let i = 1; i <= givenNum1; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
    // console.log(string)
  }
  string += "\n";
}
console.log(string);

////Type-2////
let arr8=["*"]
for(let i=0;i<5;i++){
    // console.log(arr8.join(''));
    // console.log(arr8.push('*')) 
}

//Print the right triangle pattern
let givenNum2 = 5;
let string1 = "";
for(let i=1; i<=givenNum2 ;i++){
  for(let j=0;j<givenNum2-i;j++){
      string1 +=" ";
  }
  for(let k=0;k<i;k++){
    string1 +="*";
  }
  string1+='\n'
}
console.log(string1);


//Print Pyramid
let givenNum3 = 5;
let string2 = "";
//External Loop
for(let i = 1; i<=givenNum3; i++){
    //For Spaces
    for(let j=1; j<=givenNum3-i; j++){
        string2 += " ";
    }
    //For Stars
    for(let k=0;k<2*i-1;k++){
         string2+="*";
    }

    string2+= "\n";
};
console.log(string2);

/////     Problem-8 25-04-2022     /////
//Print reverse of a String  //Reference: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/
// function reverseString(str) {
//     let newString = "";
//     for(let i=0;i<=str.length-1;i--){
//         newString+=str[i];
//     }
//     return newString;
    
// }

// let revStr = reverseString('hello');
// console.log(revStr);

//Print the Values of an array in an object using recursion
let obj3={
       name:'one',
       value:{
           name:'two',
           value: {
               name:'three',
               value: {
                   name:'four',
               }
           }
       }
}
//Recursion Reference:https://www.programiz.com/javascript/recursion
//Function Logic to get values from Object
function getInto (object) {
    let arr = [];
    function pushElementsToArray (obj) {
        if(obj['name']) {
            arr.push(obj['name'])
        }
        if(obj['value']) {
            pushElementsToArray(obj['value'])
        }
    }
    pushElementsToArray(object);
    return arr
}

console.log(getInto(obj3))
// //General way to get vaues from nested Objects
// console.log(obj3['value']['value']['value']);






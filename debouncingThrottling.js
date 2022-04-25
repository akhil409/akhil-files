//Debouncing in Javascript
let counter=0;
let getData=()=>{
  console.log("Fetching Data..!",counter++);  //Calls an API and get data
}

let debounce=function(fun,delay){
    let timer;
    return function(){
        let context=this;   //We can remove this elements too
        args=arguments;     //WE will get the oupt too.
        clearTimeout(timer)
        timer=setTimeout(()=>{
             getData.apply(context,args);
        },delay)
    }
}

let output=debounce(getData,2000);

//Throttling in Javascript
// This is the normal Function without Throttling
let normalFun=()=>{
    console.log("This is a normal Function");
}

window.addEventListener('resize',normalFun);

let throtFun=()=>{
    console.log("This is a Throttled Function")
};

// This is the Function with Throttling
let throttleFun=()=>{
    console.log("This is a Throttled Function")
};

let throlled=(tfun,limit)=>{
    let flag=true;
    return function(){
        let context1=this
        args1=arguments
        if(flag){
            tfun.apply(context1,args1);
            flag=false;
            setTimeout(() => {
                flag=true
            }, limit);
        }

    }
}

let throttledOutput=throlled(throttleFun,3000);

window.addEventListener('resize',throttledOutput);
  
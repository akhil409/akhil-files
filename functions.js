function x(y){
    y()
   console.log("This is X")
   
}

x(y);

function y(){
    console.log("This is Y")
}

let z= function(){
    console.log("This is an anonymous function")
}
z()

function video(title){
    this.title=title;
    console.log(this);
};
video()
const vi=new video("B");

//Event Handling                  //Reference: https://www.geeksforgeeks.org/what-is-event-bubbling-and-event-capturing-in-javascript/
let event1=document.getElementById('event1');
    event1.addEventListener('click',(event)=>{
    console.log("Event-1 is Clicked");
    // event.stopImmediatePropagation();
});
//Thesa are duplicates of event one to stop this duplicates flow use stopImmediatePropagation() method
event1.addEventListener('click',()=>{
console.log("Duplicate-1 Event-1 is Clicked")
});

event1.addEventListener('click',()=>{
console.log("Duplicate-2 Event-1 is Clicked")
});

event1.addEventListener('click',()=>{
console.log("Duplicate-3 Event-1 is Clicked")
});

//Event Bubbling  & Event Capturing 
let event2=document.getElementById('event2');
    event2.addEventListener('click',(event)=>{
    console.log("Event-2 is Clicked");
    // event.stopImmediatePropagation();
});
//(if we pass true as third parameter in event then we will get the capturing event)
let child=document.getElementById('child');
    child.addEventListener('click',(event)=>{
    console.log("Child is Clicked")
    // event.stopImmediatePropagation();
});

let parent=document.getElementById('parent');
    parent.addEventListener('click',(event)=>{
    console.log("Parent is Clicked")
    event.stopImmediatePropagation();
});

//Event Delegation
let tasks=document.getElementById('tasks');
    tasks.addEventListener('click',(event)=>{
    event.target.classList.toggle("completed");
});





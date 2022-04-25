function formName() {
    let name=document.fform.fname.value;
    // alert("Hello "+ name)
    document.fform.fname.value="Hellow " + name
}

//Get Element by ID
function squarNum(){
    let number=document.getElementById('fname').value;
    alert('The Square number is: ' + (number*number))
}

//Get Elements by Name
function myfnname() {
    let namefn=document.getElementsByName('gender');
    alert("Total Counts of gender are:" + namefn.length)
}

//Get Elements by Class Name
function classpara() {
    let totalCount=document.getElementsByClassName('para');
    alert("The total number of paragraphs are " + totalCount.length)
}

//Get Elements by Tag Name
function tagName1() {
    let tagNames=document.getElementsByTagName('h4');
    alert('Here total number of Heading elements are ' + tagNames.length)
}

//Set Attribute Method
function setAttri() {
    document.getElementById('setAtt').setAttribute("class", "democlass");
}

//Set Attribute 
function setAttri1() {
    document.getElementById('setAttri1').setAttribute('href','https://www.facebook.com/')
}

//Set Attribute
function changeAttri() {
    document.getElementById('change').setAttribute('type','button')
}

//Disabled button using set Attribute Method
function dis() {
    document.getElementById('disab').setAttribute('disabled','')
}

//Get Attribute Method
function getAttri() {
    let get1=document.getElementById('getatt1').getAttribute('style');
    document.getElementById('p1').innerHTML=get1;

    let get2=document.getElementById('getatt2').getAttribute('style');
    document.getElementById('p2').innerHTML=get2;
}

//Add Event Listener Method
document.getElementById('addEl').addEventListener('click',addEvent);
function addEvent() {
    document.getElementById('addE2').innerHTML="Hello World" + "<br/>" +  " This is Akhil....!"
}

//Create Element Method
function createEle() {
    let btn1=document.createElement('button')
    btn1.innerHTML='Click..!'
    document.getElementById('creatEl').appendChild(btn1);
}

//Append Child Method
function appChild() {
    let node=document.createElement('Li')
    let nodeText=document.createTextNode("React Developer");
    node.appendChild(nodeText);
    document.getElementById('languages').appendChild(node);
}

//Append Method
//Appending text
let div=document.createElement('div')
let p3=document.createElement('p3');

div.append('Some Text Here')
console.log(div.textContent)

//Appending an element
let div1=document.createElement('div1')
let p4=document.createElement('p4');

div1.append(p4)
console.log(div1.childNodes);

//Appending an element and text
let div2=document.createElement('div2')
let p5=document.createElement('p5');

div2.append("Hello Guys,how you doing today",p4)

console.log(div2.childNodes)

//Append In Html
function appHtml() {
    let appe=document.createElement('h4');
    let appe1=document.createTextNode('Hey everyone');
    appe.append(appe1);
    document.getElementById('app1').append(appe);
}

//Query SelectorAll Method
let qselect=document.querySelectorAll('.hqselect');
console.log(qselect)

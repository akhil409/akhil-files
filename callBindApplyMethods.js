//Bind Method im Javascript    //Reference: https://blog.bitsrc.io/understanding-call-bind-and-apply-methods-in-javascript-33dbf3217be
//Example-1
let john={
    name:"John",
    age:26
};

let warner={
    name:"Warner",
    age:25
}

function bindfun(a,b) {
    console.log(`Hi my name is ${this.name} and i am ${this.age}years old.I Love ${a} and ${b}`)
}

let combine=bindfun.bind(john);  ///It creates a new function //We can pass the arguments here or
combine("apple","banana");       //We can pass the arguments here tooo

let combine1=bindfun.bind(warner,'Berry','Grapes'); ///It creates a new function
combine1();

//// Example-2
  const john1 = {
    name: 'John'
  };
  const jane1 = {
    name: 'Jane'
  };

  function greeting(lang) {
    console.log(`Hi this is ${this.name}.I can speak ${lang}`);
  }

  const greetingJohn = greeting.bind(john1, 'Telugu');  //We can pass the parameters in this new function
  greetingJohn();
  const greetingJane = greeting.bind(jane1);
  greetingJane('English');                              //We can pass the parameters in this new function tooo

//Example-3 Did not get the answer find it
let obj = {
    firstname2 : "Kumar",
    age2 : 44,
    getDetails : function (name2 = this.firstname2, age2 = this.age2) {
        console.log(name2, age2)
    }
}

let details = function (firstname2, age2) {
    console.log(this.getDetails(firstname2,age2),firstname2,age2);  //Find it
}

let getDetails=details.bind(obj);

getDetails("Alladi",25);

//Example-4
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

 var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

 logPokemon('sushi', 'algorithms');

 var getData = pokemonName.bind(pokemon);

 getData('dosa', 'running')

//Call Method in Javascript
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(para1, para2) {
    console.log(this.getPokeName() + ' loves ' + para1 + ' and ' + para2);
};

pokemonName.call(pokemon,'sushi', 'algorithms');

//Apply Method im Javascript
var pokemon1 = {
    firstname1: 'Akhil',
    lastname1: 'Kumar',
    getPokeName1: function() {
        var fullname1 = this.firstname1 + ' ' + this.lastname1;
        return fullname1;
    }
};

var pokemonName1 = function(para3, para4) {
    console.log(this.getPokeName1() + ' loves ' + para3 + ' and ' + para4);
};

pokemonName1.apply(pokemon1,['sushi', 'Javascript']);

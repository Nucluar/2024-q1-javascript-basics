//@ts-check
let firstname = "luke";


let sayHi = function(f, a) {
    let greeting = 'Hello! My name is ${firstName} and I am ${age} years old';
    // "Hello! My name is" + firstName + ". and I am" + age + "years old.";
    console.log(greeting);
};

sayHi("Luke", 13);
sayHi(firstname, 13);

//console.log(firstName);

function add(a, b){
    let answer = a + b;
    return answer;
}

let additionAnswer = add(100, 5000)
add(5000, 9873498739873)
console.log(add(100, 5000));

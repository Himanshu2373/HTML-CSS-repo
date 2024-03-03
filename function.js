//function decleartion

//   function function_name()
//        {
//
//        }

// function expression

// let function_name= function()
//      {
//
//      }

// ARROW FUNCTION

// let function_name=(parameter)=>
//            {
//             // Body
//            }

// NOTE : IN arrow function when we pass one parameter then we can use or not use
//        () bracket as own choice but when pass two parameters or empty parameter
//        then must be use bracket

//FUNCTION INSIDE FUNCTION

// let function1=function()
//  {
//     let insideFunction=function(){
//         console.log("Inside function")
//     }
//     console.log("outside Function")
//     insideFunction()   //inside function call
//  }

//  function1()   // outside function call

// Lexical scope : means first priority inside function then outside function

//  var a = 10; // variable a assigned to 10

// var func = function (){ // outermost function
//     let a=25
//     var b = 20;
//     console.log("a and b is accessible (outer):", a, b);
//     var innerFunc= function (){ // innermost function
//         var c = 30;
//         console.log("a and b and c is accessible (innner):", a, b, c);
//     }
//     innerFunc();
//     return;
// }
// func(); // invoke function func
// console.log("only a is accessible (global):", a);

// BLOCK SCOPE VS FUNCTION SCOPE
// let and Const are BLOCK SCOPE , Var is Function scope

//REST Parameter

// function myfun(a, b, ...c){
//     console.log(a)   //output:1
//     console.log(b)   //output:2
//     console.log(c)   //output: [ 3.4, 5, 6, 7 ]
// }
// myfun(1,2,3.4,5,6,7)

// OBJECT PASS WITHIN FUNCTION

const person = {
  name: "Himanshu",
  Gender: "Male",
};

function print(obj) {
  console.log(obj.name);
  console.log(obj.Gender);
}

print(person);

//Function inside object

let person2 = {
  Name: "himanshu",
  age: 24,
  about: function () {
    // console.log("Name is Himanshu and age is 24")
    console.log("Name is " + this.Name + " and age is" + this.age);
  },
};

person2.about();

// call(), apply() and bind()

const person4 = {
  Name: "himanshu",
  age: 24,
  about: function () {
    // console.log("Name is Himanshu and age is 24")
    console.log("Name is " + this.Name + " and age is" + this.age);
  },
};
const person3 = {
  Name: "RAM",
  age: 23,
};

person4.about.call(person3); //output:Name is RAM and age is23
person4.about.apply(person3, [" "]);

//Function create object

function createUser(Name, age, email, add) {
  const user1 = {};
  (user1.Name = Name),
    (user1.age = age),
    (user1.Name = email),
    (user1.age = add),
    (user1.about = function () {
      return this;
    });
}

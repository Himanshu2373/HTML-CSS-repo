// getter and setter properties

// let person = {
//   Fname: "Himanshu",
//   Lname: "Kumar",
//   get fullname() {
//     return `${person.Fname} ${person.Lname}`;
//   },
//   set fullname(value) {
//     let res = value.split(" ");
//     person.Fname = res[0];
//     person.Lname = res[1];
//   },
// };
// person.fullname = "Himanshu Yadav";
// console.log(person.fullname); //

// try and catch  block for error handling

let person = {
  Fname: "Himanshu",
  Lname: "Kumar",
  get fullname() {
    return `${person.Fname} ${person.Lname}`;
  },
  set fullname(value) {
    if (typeof value !== "string") {
      // here check the value is string or not if not then throw an error
      throw new Error("Input should be a string");
    }
    let res = value.split(" ");
    person.Fname = res[0];
    person.Lname = res[1];
  },
};
try {
  person.fullname = "Himanshu Yadav"; // if we input any other value then  it will show an error in the console
  console.log(person.fullname); //
} catch (e) {
  // catch the error value that's throw from setter property and display error
  alert(e);
}

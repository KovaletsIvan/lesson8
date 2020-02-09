// Task 1

function upperCase(str) {
  let reg = /^[A-Z]/;
  let y = reg.test(str)
    ? "String's starts with uppercase character"
    : "String's not starts with uppercase character";
  console.log(y);
}
let str = "some text";
upperCase(str);

// Task 2

let email = prompt("Enter your Email pleas", "email");
function checkEmail(email) {
  let reg = /^\S+\_?\-?\@\S+\.\S{2,3}$/;
  let cor = reg.test(email);
  let result = cor == true ? "Email correct" : "Incorect email adres";
  console.log(result);
}
checkEmail(email);

// Task 3

let string = "cdbBdbsbz";
let reg1 = /db+d/gi;
let reg2 = /bb+/gi;
let reg3 = /d/gi;
let res1 = string.match(reg1);
let res2 = string.match(reg2);
let res3 = reg3.exec(string);
console.log(res1.concat(res2, res3));

// Task 4

/*let text = "Java Script";
let change = text.replace(/script/i, "Java");   // 1
change = change.replace(/java/i, "Script");
console.log(change);*/

let test = "Java Script";
let change = test.replace(/java script/i, "Script Java"); // 2
console.log(change);

// Task 5

let bel = prompt("Enter your credit card number", "9999-9999-9999-9999");
function validBel(bil) {
  let regE = /\d{4}\-\d{4}\-\d{4}\-\d{4}/;
  let res = regE.test(bil);
  let s = res == true ? "Number correct" : "Number incorrect";
  console.log(s);
}
validBel(bel);

// Task 6

let mail = prompt("Enter Email", "email");
function emailCheck(mail) {
  let re = /^[^-_@#%*()!?^&=+\|/]\S+\[^@#%*()!?]\_?\-?\@\S+\.\S{2,3}$/;
  let y = re.test(mail);
  let d = y == true ? "Email correct" : "Incorect email adres";
  console.log(d);
}
emailCheck(mail);

// Task 7

let login = prompt("Enter your login", "login");
function checkLogin(login) {
  let rg = /^[^0-9-_@#%*()!?^&=+\|/]\w{2,10}$/gi;
  let test = rg.test(login);
  let r = test == true ? "Correct Login" : "Incorrect Login";
  console.log(r);
  console.log(login.match(/\d+/g));
}
checkLogin(login);

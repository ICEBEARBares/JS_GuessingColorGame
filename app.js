button()
function button() {

let app = Math.floor(Math.random() * 9);
console.log("RANDOM NUM. : " + app)

app.toString()

if (app === 0) {
    var result = app.toString().replace(0, 'red');
    console.log("CHANGED TO TEXT : " + result)
}else if (app == 1) {
    var result = app.toString().replace(1, 'blue');
    console.log("CHANGED TO TEXT : " + result)
}else if (app == 2) {
    var result = app.toString().replace(2, 'green');
    console.log("CHANGED TO TEXT : " + result)
}else if (app == 3) {
    var result = app.toString().replace(3, 'orange');
    console.log("CHANGED TO TEXT : " + result)
}else if (app == 4) {
    var result = app.toString().replace(4, 'darkblue');
    console.log("CHANGED TO TEXT : " + result)
}else if (app == 5) {
    var result = app.toString().replace(5, 'pink');
    console.log("CHANGED TO TEXT : " + result)
}else if (app == 6) {
    var result = app.toString().replace(6, 'yellow');
    console.log("CHANGED TO TEXT : " + result)
}else if (app == 7) {
    var result = app.toString().replace(7, 'black');
    console.log("CHANGED TO TEXT : " + result)
}else if (app == 8) {
    var result = app.toString().replace(8, 'white');
    console.log("CHANGED TO TEXT : " + result)
}else if (app == 9) {
    var result = app.toString().replace(9, 'brown');
    console.log("CHANGED TO TEXT : " + result)
}
console.log("ANS : " + result)

var round = prompt("Please Enter How Many Times That You Wanna Guess?? '0' To STOP");
while (!/^[0-9]+$/.test(round)) {
    alert("You did not enter the correct things :)");
    round = prompt("Please Enter Time That You Wanna Guess???");
}

console.log("Times That Wanna Play : " + round)
let counter = 0;

for (var i = 0; i < round; i++) {
    ask = prompt("Please Type Your Guessing Color (Type 'end' To Give UP)");
if (ask === "สีแดง") {
    var user = ask.toString().replace("สีแดง", 'red');
    console.log(user)
}else if (ask == "สีฟ้า") {
    var user = ask.toString().replace("สีฟ้า", 'blue');
    console.log(user)
}else if (ask == "สีเขียว") {
    var user = ask.toString().replace("สีเขียว", 'green');
    console.log(user)
}else if (ask == "สีส้ม") {
    var user = ask.toString().replace("สีส้ม", 'orange');
    console.log(user)
}else if (ask == "สีน้ำเงิน") {
    var user = ask.toString().replace("สีน้ำเงิน", 'darkblue');
    console.log(user)
}else if (ask == "สีชมพู") {
    var user = ask.toString().replace("สีชมพู", 'pink');
    console.log(user)
}else if (ask == "สีเหลือง") {
    var user = ask.toString().replace("สีเหลือง", 'yellow');
    console.log(user)
}else if (ask == "สีดำ") {
    var user = ask.toString().replace("สีดำ", 'black');
    console.log(user)
}else if (ask == "สีขาว") {
    var user = ask.toString().replace("สีขาว", 'white');
    console.log(user)
}else if (ask == "สีน้ำตาล") {
    var user = ask.toString().replace("สีน้ำตาล", 'brown');
    console.log(user)
}else if (ask === "แดง") {
    var user = ask.toString().replace("แดง", 'red');
    console.log(user)
}else if (ask == "ฟ้า") {
    var user = ask.toString().replace("ฟ้า", 'blue');
    console.log(user)
}else if (ask == "เขียว") {
    var user = ask.toString().replace("เขียว", 'green');
    console.log(user)
}else if (ask == "ส้ม") {
    var user = ask.toString().replace("ส้ม", 'orange');
    console.log(user)
}else if (ask == "น้ำเงิน") {
    var user = ask.toString().replace("น้ำเงิน", 'darkblue');
    console.log(user)
}else if (ask == "ชมพู") {
    var user = ask.toString().replace("ชมพู", 'pink');
    console.log(user)
}else if (ask == "เหลือง") {
    var user = ask.toString().replace("เหลือง", 'yellow');
    console.log(user)
}else if (ask == "ดำ") {
    var user = ask.toString().replace("ดำ", 'black');
    console.log(user)
}else if (ask == "ขาว") {
    var user = ask.toString().replace("ขาว", 'white');
    console.log(user)
}else if (ask == "น้ำตาล") {
    var user = ask.toString().replace("น้ำตาล", 'brown');
    console.log(user)
}else if (ask === "red") {
    var user = ask.toString().replace("red", 'red');
    console.log(user)
}else if (ask == "blue") {
    var user = ask.toString().replace("blue", 'blue');
    console.log(user)
}else if (ask == "green") {
    var user = ask.toString().replace("green", 'green');
    console.log(user)
}else if (ask == "orange") {
    var user = ask.toString().replace("orange", 'orange');
    console.log(user)
}else if (ask == "darkblue") {
    var user = ask.toString().replace("darkblue", 'darkblue');
    console.log(user)
}else if (ask == "pink") {
    var user = ask.toString().replace("pink", 'pink');
    console.log(user)
}else if (ask == "yellow") {
    var user = ask.toString().replace("yellow", 'yellow');
    console.log(user)
}else if (ask == "black") {
    var user = ask.toString().replace("black", 'black');
    console.log(user)
}else if (ask == "white") {
    var user = ask.toString().replace("white", 'white');
    console.log(user)
}else if (ask == "brown") {
    var user = ask.toString().replace("brown", 'brown');
    console.log(user)
}else if (ask == "end") {
    break;
}
counter++;

    if (user == result){
        alert("Correct");
        break;
    }
}
console.log("Played : " + counter + " times");
}
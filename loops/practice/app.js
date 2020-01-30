// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i);
// }

// const arr = ["Scooby", "Velma", "Shaggy"];
// const len = arr.length;

// for (let i = len - 1; i >= 0; i--) {
//     console.log(arr[i].toUpperCase);
// }

// const SECRET = "password";

// let guess = prompt("Enter code");
// while (guess !== SECRET) {
//     guess = prompt("Enter code");
// }

let count = 0;
while (count < 10) {
    count++;
    console.log(count)
}

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!")

let input = prompt("Hey, say something!")
while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me") break;
}
console.log("OK YOU WIN!")

for (let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 100) break;
}
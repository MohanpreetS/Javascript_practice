let input = prompt("Welcome to the todo app, type something");

let todoArray = [];

while (true) {
    if (input.toLowerCase() === "quit") {
        console.log("quitting");
        break;
    }
    else if (input.toLowerCase() === "new") {
        let newTodo = prompt("Enter your new todo");
        todoArray.push(newTodo);
    } 
    input = prompt("Please type a command");
}
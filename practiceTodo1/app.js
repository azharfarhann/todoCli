// import readline from "readline-sync";

// function main() {
//   console.clear();

//   let options = [
//     "0. Exit",
//     "1. Say Hello",
//     "2. Say Goodbye",
//     "3.Tell me a joke",
//     "4.show current date and time",
//     "5.Show current working directory",
//     "6.Clear screen",
//   ];
//   options.forEach((n) => console.log(n));
//   let choice = readline.question("Select an option: ");
//   switch (choice) {
//     case "0":
//       console.log("bye");
//       return;
//     case "1":
//       console.log("hello there");
//       break;
//     case "2":
//       console.log("goodbye");
//       break;
//     case "3":
//       console.log("a joke haha");
//       break;
//     case "4":
//       console.log(new Date().toLocaleString());
//       break;
//     case "5":
//       console.log("CWD:", process.cwd());
//       break;
//     case "6":
//       console.clear();
//       break;
//     case 7:
//       console.log("CWD:", process.cwd());
//       break;
//     default:
//       console.log("Invalid");
//     // break;
//   }
//   readline.question("\nPress enter to continue..");
// }
// main();

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// import readline from "readline-sync"
// let notes = []
// function main() {
//   console.clear();
//   let options = ["0. Exit","1. Add a note","2. Show all notes"];
//   options.forEach(opt => console.log(opt));
//   let choices = readline.question("Select an option: ");
//   switch (choices) {
//     case "0":
//       console.log("bye");
//       return;
//       case "1":
//         console.log(notes.push("hello"));
//         break;
//         case "2":
//           notes.forEach(n => console.log(n));
//           break;
//     default:
//       console.log("invalid");
//       // break;
//   }
//       readline.question("\npress enter to continue..")

// }
// main()

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import readline from "readline-sync";
import registerUser from "./users/register.js";
import getAllUsers from "./users/getAllUsers.js";
function main() {
  console.clear();
  try {
    console.log("========================================");
    console.log("================TODO CLI================");
    console.log("========================================");
    let options = [
      "\n0. Exit",
      "1. Register",
      "2. Login",
      "3.Add Todo",
      "4.Get All Users",
      "5.Delete All Todo\n",
    ];
    options.forEach((n) => console.log(n));
    let choices = readline.questionInt("Select from options: ");
    switch (choices) {
      case 0:
        console.log("BYE");
        return;
      case 1:
        console.log("register");
        // return; or registerUser()  ///////////  ASK???
        // break;
      case 2:
        console.log("login");
        break;
      case 3:
        console.log("Add Todo");
        break;
      case 4:
        console.log("Get All Users");
        // getAllUsers() /////////////////////  ASK ??? 
        break;

      default:
        console.log("Invalid Option Selected");
    }
    readline.question("\npress ENTER to continue..");
  } catch (err) {
    console.log("error mssg", err);
  }
}
main();

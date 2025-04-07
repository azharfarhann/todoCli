import readFile from "../utils/read.js";
import readline from "readline-sync";
import fs from "fs/promises"

async function Register() {
    try {
        let users = await readFile(); // []
        console.log(users); // in String

        let userName = readline.question("Enter your username : ")

        let password = readline.question("Enter your password :  ")
        console.log(userName, password);
    } catch (error) {
        console.log(error);
    }
}
Register();

export default Register
import readline from "readline-sync";
import fs from "fs/promises";

async function registerUser() {
  try {
    console.clear();
    let userName = readline.question("Enter your username:  ");
    let password = readline.question("Enter your passowrd: ");
    console.log(userName, password);

    // we have to read file data.json

    let outputofData = await fs.readFile(
      "/home/azhar/todoCli/practiceTodo1/data.json",
      "utf-8"
    );
    console.log(outputofData); // Now it is string format we have to conver string to object to push or add content in it , so we parse JSON.push to use Array push()method
    let strToObj = JSON.parse(outputofData); // converted in Array []
    // now push the data using artray.push() method
    let user = {
      userName,
      password,
    };
    strToObj.push(user);
    console.log(strToObj); // username and password is pushed to data.json

    ///// using writefile accepts data in string only , we need to stringify that data
    await fs.writeFile(
      "/home/azhar/todoCli/practiceTodo1/data.json",
      JSON.stringify(strToObj)
    );
    console.log("User Added Success");
  } catch (error) {
    console.log(error);
  }
}
export default registerUser;
// registerUser()   ///   ASK??????????

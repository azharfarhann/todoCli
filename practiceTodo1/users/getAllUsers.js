import fs from "fs/promises"

async function getAllUsers() {
    try {
        console.clear();
        let dataFileOutput = await fs.readFile("/home/azhar/todoCli/practiceTodo1/data.json", "utf-8")
        console.log(dataFileOutput);

    } catch (error) {
        console.log(error);
    }
    
}
// getAllUsers()  ///  ask ?????
export default getAllUsers  //// ASk ???
import fs from "fs/promises";

async function readFile() {
    try {
       let dataPath = "/home/azhar/todoCli/server/data.json"
        let userFile = await fs.readFile(dataPath,"utf-8");
        console.log(typeof userFile);
        return JSON.parse(userFile); // JSON.Parse converts string to object
    } catch (error) {
        console.log(error);
    }
}
// readFile()

export default readFile
import fs from "fs/promises";

async function writeFile(filename, content) {
    try {
        await fs.writeFile(filename,content);

    } catch (error) {
        console.log(error);
    }
}

export default writeFile
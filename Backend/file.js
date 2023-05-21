const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
    try {
        await fs.writeFile(fileName, fileContent);
        console.log("created file", fileName);
    } catch (err) {
        console.log("error on creating the file");
    }
}

myFileWriter('./demo2.txt', 'to be deleted soon');

const myFileReader = async (fileName) => {
    const data = await fs.readFile(fileName, 'utf8');
    return data;
}

// console.log(myFileReader('./demo.txt'));


const fileUpdate = async (fileName, fileContent) => {
    try {
        fs.appendFile(fileName, fileContent);
        console.log('updated file -> ');
    } catch (error) {
        console.log("error in updating file");
    }
};

// fileUpdate('./demo.txt', " We are updating the demo file.");


const fileDeleter = async (fileName) => {
    try {
        await fs.unlink(fileName);
        console.log(`deleted file is ${fileName}`);
    } catch (error) {
        console.log("error in deleting file");
    }
};

fileDeleter('./demo2.txt');
const fs = require('fs');

fs.writeFileSync('read.txt', "Welcome") // Creates a file with the name read.txt and add's the data to it

fs.writeFileSync('read.txt', "Welcome to the family") // Changes the data in the file read.txt

// If the file with the given name is not present it creates the file and add's data to it.
// If the file already exists it only changes the data inside the file

fs.appendFileSync('read.txt', " What is your name?") // Appending the data in the existing file

const buffer_data = fs.readFileSync('read.txt')// Reading the file
console.log(buffer_data) // Buffer is a data type only available in nodeJs, It stores binary data

const original_data = buffer_data.toString();
console.log(original_data)

fs.renameSync('read.txt', 'readme.txt')


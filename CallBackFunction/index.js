import fs from 'fs';

// Creating the async file 

// fs.writeFile("reade.txt", "today is the awesome day.",
//     (err) => {
//         console.log("File is created");
//         console.log(err);
//     });

// we pass them a function as an argument - a call back
// that gets called when the task completes.
// The callback has an argument that tells you weather the operation
// completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if its nothing), and start
// checking for errors.

//Appending in the async file.

// fs.appendFile("reade.txt", "And i am loving the vibe.", (err) => {
//     console.log(err);
//     console.log("We have appended in the file.")
// })

// Reade from a async file.

fs.readFile('reade.txt', 'UTF-8', (err, data) => {
    console.log(data);
    console.log(err);
})

// to get the original data and not the buffer data,  we use UTF-8.
// UTF-8 encodes the data.

{/* <Buffer 74 6f 64 61 79 20 69 73 20 74 68 65 20 61 77 65 73 6f 6d 65 20 64 61 79 2e 41 6e 64 20 69 20 61 6d 20 6c 6f 76 69 6e 67 20 74 68 65 20 76 69 62 65 2e ... 26 more bytes> */ }

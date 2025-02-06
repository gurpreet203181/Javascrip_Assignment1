// Import the built-in 'fs' module
const fs = require('fs');

fs.readFile('content.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File Contents:\n', data);
});
const fs = require('fs');

const writeFile = async (fileRoute, message) => {
    await fs.writeFile(
        fileRoute,
        message, () => {
        console.log(message)
    });
}

module.exports = {
    writeFile
}
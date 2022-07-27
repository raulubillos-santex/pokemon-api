const fs = require('fs')

const writeFile = async (fileRoute, menssage) => {
    await fs.writeFile(fileRoute, menssage, () => {
        console.log(menssage)
    })
}

module.exports = {
    writeFile
}
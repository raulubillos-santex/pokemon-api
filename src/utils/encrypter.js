const bcrypt = require('bcrypt');

const encrypt = (text) => {
    const encrypted = bcrypt.hashSync(text, Number.parseInt(process.env.SALTROUNDS));

    return encrypted;
}

const compare = (text, hashed) => {
    const coincidence = bcrypt.compareSync(text,hashed);

    return coincidence;
}

module.exports = {
    encrypt,
    compare
}
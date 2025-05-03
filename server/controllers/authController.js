const bcrypt = require("bcryptjs");
require("dotenv").config();

const registerUser = (req, res) => {
    const user = {
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        passwordRepeat: req.body.passwordRepeat,
    }

    console.log(user);
}

module.exports = {
    registerUser
};
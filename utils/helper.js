const jwt = require("jsonwebtoken");
const {jwtSecretKey, jwtExpTime} = require("./config");

const createHasuraJWT = (userId, role) => {
    return jwt.sign({
        "https://hasura.io/jwt/claims": {
            "x-hasura-default-role": role,
            "x-hasura-allowed-roles": [role],
            "x-hasura-user-id": userId,
        },
        user_id: userId
    }, jwtSecretKey, {expiresIn: jwtExpTime});
}

module.exports = {
    createHasuraJWT
}

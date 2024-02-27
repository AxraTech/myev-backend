var express = require('express');
const knex = require("../utils/knex");
const {compare} = require("bcrypt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {jwtKey, jwtExpTime, jwtSecretKey} = require("../utils/config");
const {createHasuraJWT} = require("../utils/helper");
var router = express.Router();

router.post("/signin", async (req, res) => {
    try {
        const {login, password} = req.body.input;
        if (login && password) {
            const existingUser = await knex('users').where('phone', login).orWhere('email', login)
            if (existingUser.length === 0) {
                return res.status(400).json({message: "user doesn't exists"})
            } else {
                if (existingUser[0].disabled === true) {
                    return res.status(401).json({message: "account is disabled"});
                } else {
                    const match = await compare(password, existingUser[0].password)
                    if (!match) {
                        return res.status(401).json({message: "invalid password"});
                    } else {
                        const token = createHasuraJWT(existingUser[0].id, 'user')
                        return res.status(200).json({token})
                    }
                }
            }
        } else {
            return res.status(400).json({message: "missing required fields"})
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
})

router.post("/signup", async (req, res) => {
    try {
        const {profile_picture_url, name, phone, email, password} = req.body.input;
        if (profile_picture_url && name && phone && email && password) {
            const existingUser = await knex('users').where('phone', phone).orWhere('email', email)
            if (existingUser.length !== 0) {
                return res.status(401).json({message: "user already exists"})
            } else {
                const hashedPassword = await bcrypt.hash(password, 10)
                const createdUser = await knex('users').insert({
                    name,
                    phone,
                    email,
                    password: hashedPassword,
                    profile_picture_url
                }).returning('id')
                const token = createHasuraJWT(createdUser[0].id, 'user')
                return res.status(201).json({token})
            }
        } else {
            return res.status(400).json({message: "missing required fields"})
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json(e)
    }
})


module.exports = router;

const zod = require('zod');

const signupSchema = zod.object({
    name : zod.string(),
    username : zod.string(),
    password : zod.string(),
    college : zod.string()
})

const signinSchema = zod.object({
    username : zod.string(),
    password : zod.string()
})

module.exports = {
    signinSchema, signupSchema
}
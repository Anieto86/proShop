import jwt from 'jsonwebtoken'

const generatedToken = (id) => {
    return jwt.sign({id}, process.env.JWT_TOKEN, {
        expiresIn : "30d"
    })
}

export default generatedToken
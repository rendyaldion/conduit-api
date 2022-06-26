const UserService = require('../services/user.service')

module.exports = {
    login: async (req, res) => {
        try {
            const checkUser = await UserService.get({ email: req.body.user.email })

            if (!checkUser) {
                res.status(401)
                throw new Error('No user with this email')
            }

            const user = await UserService.login(req.body.user)

            if (user.error) {
                res.status(401)
                throw new Error(user.error)
            }
            
            res.json({
                user: {
                    email: user.email,
                    token: user.token,
                    username: user.username,
                    bio: user.bio,
                    image: user.image
                }
            })
        } catch (error) {
            const status = res.statusCode ? res.statusCode : 500
            res.status(status).json({error: error.message})
        }
    },
    
    register: async (req, res) => {
        try {
            const existingEmail = await UserService.get({ email: req.body.user.email })
            const existingUsername = await UserService.get({ username: req.body.user.username })

            if (existingEmail || existingUsername) {
                res.status = 401
                throw new Error('User already exists with this email/username')
            }

            const user = await UserService.register(req.body.user)

            res.json({
                user: {
                    email: user.email,
                    token: user.token,
                    username: user.username,
                    bio: user.bio,
                    image: user.image
                }
            })
        } catch (error) {
            const status = res.statusCode ? res.statusCode : 500
            res.status(status).json({ error: error.message })
        }
    }
}
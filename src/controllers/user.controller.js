const UserService = require('../services/user.service')

module.exports = {
    get: async (req, res) => {
        try {
            const user = await UserService.get({ email: req.query.email })

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
    },
    update: async (req, res) => {
        try {
            await UserService.update(req.body.user, token = req.headers['x-access-token'])
            
            const user = await UserService.get({ token: req.headers['x-access-token'] })

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
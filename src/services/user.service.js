const UserModel = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

module.exports = {
    login: async (data) => {
        try {
           const user = await UserModel.findOne({ where: { email: data.email } })
           const validatePassword = await bcrypt.compare(data.password, user.password)

           if (!validatePassword)
                return { error: 'Password doest not match' }
            
            const token = await jwt.sign({ email: data.email }, process.env.TOKEN_KEY)
            await UserModel.update({ token: token}, { where: { email: data.email } })

            const response = await UserModel.findOne({ where: { email: data.email } })

            return response
        } catch (error) {}
    },

    register: async (data) => {
        try {
            const salt = await bcrypt.genSalt(10)
            
            data.token = await jwt.sign({ email: data.email }, process.env.TOKEN_KEY)
            data.password = await bcrypt.hash(data.password, salt)

            const user = await UserModel.create(data)

            return user
        } catch (error) {}
    },

    get: async (data) => {
        try {
            return await UserModel.findOne({ where: data })
        } catch (error) {}
    },

    update: async (data, token) => {
        try {
            return await UserModel.update(data, { where: { token: token } })
        } catch (error) {}
    }
}
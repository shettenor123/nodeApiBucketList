const {
    respSuccess,
    respError,
    respUnAuthorized
} = require('../utils/respHandler');
const { addUser, getUser } = require('../modules/userModule')

module.exports.login = async (req, res) => {

    try {
        const { email, password } = req.body
        console.log(req.body, ' login user ......')
        const query = {
            email,
            password
        }
        const result = await getUser(query)
        if (result) {
            respSuccess(res, { message: 'Login Successfull', token: email })
        } else {
            respError(res, { message: "Invalid credentials" })
        }
    } catch (error) {

        console.log(error)
        respError(error)

    }
}

module.exports.register = async (req, res) => {

    try {
        const { email } = req.body
        console.log(req.body, ' upload seller data ......')
        const check = await getUser({ email })
        if (check)
            return respError(res, { message: 'user with this email already exist!' })
        else {

            const result = await addUser(req.body)
            console.log(' completed -----------------')
            respSuccess(res, { token: result.email })
        }


    } catch (error) {

        console.log(error)
        respError(error)

    }
}

module.exports.logout = async (req, res) => {

    try {
        const { token } = req.body
        // console.log(req.body, ' logout user ......')
        // const query = {
        //     email: token
        // }
        // const result = await getUser(query)
        respSuccess(res, { message: 'Loggedout Successfull' })

    } catch (error) {

        console.log(error)
        respError(error)

    }
}
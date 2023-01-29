import UserModule from '../model/User.model.js';
import bcrypt from 'bcrypt'
import { Jwt } from 'jsonwebtoken'

/** POST : http://localhost:8000/api/register  */
export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;
        // check the existing user
        const existUsername = new Promise((resolve, reject) => {
            UserModule.findOne({ username }, function (err, user) {
                if (err) reject(new Error(err))
                if (user) reject({ error: "plase use unique username" })
                resolve();
            })

        });
        //check the existing email
        const existEmail = new Promise((resolve, reject) => {
            UserModule.findOne({ username }, function (err, email) {
                if (err) reject(new Error(err))
                if (email) reject({ error: "plase use unique email" })
                resolve();
            })
        });

        Promise.all([existUsername, existEmail])
            .then(() => {
                if (password) {
                    bcrypt.hash(password, 10)
                        .then(hashedPassword => {
                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || '',
                                email
                            });
                            // return save result as a response
                            user.save()
                                .then(result => res.status(201).send({ msg: "User register Successfully" }))
                                .catch(error => res.status(500).send({ error }));
                        }).catch(error => {
                            return res.status(500).send({
                                error: 'Enable to hashed password'
                            })
                        })
                }
            }).catch(error => {
                return res.status(500).send({ error })
            })
    } catch (error) {
        return res.status(500).send(error);
    }
}

/** PUT : http://localhost:8000/api/login  */
export async function login(req, res) {
    const { username, password } = req.body;
    try {
        UserModel.findOne({ username })
            .then(user => {
                bcrypt.compare(password, user.password)
                    // Sahib olduğumuz şifre Karşılaştırma
                    .then(passwordCheck => {
                        if (!passwordCheck) return res.status(404).send({ error: " Don't have Password" })
                        // create jtw token
                        Jwt.sign() // Burada Kaldık
                    })
                    .catch(error => {
                        return res.status(404).send({ error: "Password does not Match" })
                    })
            })
            .catch(error => {
                return res.status(404).send({ error: "Username Not Found" });
            })
    } catch (error) {
        return res.status(500).send({ error })
    }
}

/** GET : http://localhost:8000/api/user/example123  */
export async function getUser(req, res) {
    res.json('getUser route');
}

/** : http://localhost:8000/api/user/example123  */
export async function updateUser(req, res) {
    res.json('updateUser route');
}


/** GET : http://localhost:8000/api/user/generateOTP  */
export async function generateOTP(req, res) {
    res.json('genereteOTP route');
}

/** GET : http://localhost:8000/api/user/verifyOTP  */
export async function verifyOTP(req, res) {
    res.json('verifyOTP route')
}

// successfully redirect user when OTP is valid
/**GET : http://localhost:8000/api/user/createResetSession*/
export async function createResetSession(req, res) {
    res.json('createResetSession route');
}
// update the password when we have valid session
/**PUT : http://localhost:8000/api/user/resetPassword*/
export async function resetPassword(req, res) {
    res.json('resetPassword route');
}


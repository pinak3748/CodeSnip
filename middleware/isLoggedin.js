// var jwt = require("jsonwebtoken");
// exports.isLoggedin = async (req, res, next) => {
//     console.log(req.cookies)
//     console.log(req.body)
//     try{
//         const cookie = req.cookies['token']
//         const check = jwt.verify(cookie, process.env.token_secret)
//         if (!check) {
//             return res.status(401).send('login first')
//         } else {
//             res.locals.check = check;
//             next();
//         }
//     }catch(e){
//         return res.status(401).send({message: 'unauthenticated'})
//     }
// }

var jwt = require("jsonwebtoken");
exports.isLoggedin = async (req, res, next) => {
    // console.log(req.body)
    try {
        const cookie = req.headers.authorization
        // const cookie = req.cookies.token
        // const cookie = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTQ1YjYxN2YyODRjNDdkMjFjMTllZTQiLCJpYXQiOjE2MzQyNzAyOTF9.l3KilJ179frsus5ZbJHHGvN3hiynd7kHyCnCAa6-Tfg'
        const check = jwt.verify(cookie, process.env.token_secret)
        if (!check) {
            return res.status(401).send('login first')
        } else {
            res.locals.check = check;
            next();
        }
    } catch (e) {
        return res.status(401).send({message: 'unauthenticated'})
    }
}

import jwt from "jsonwebtoken";

require("dotenv").config();


export function requireAuthentication(gssp) {
    return async (context) => {
        const {req, res} = context;
        const token = req.cookies['token']; // Add logic to extract token from `req.headers.cookie`

        if (!token) {
            // Redirect to login page
            return {
                redirect: {
                    destination: '/Auth',
                    statusCode: 302
                }
            };
        }
        const claims = jwt.verify(token, process.env.JWT_KEY)
        if (!claims) {
            return {
                redirect: {
                    destination: '/Auth',
                    statusCode: 302
                }
            };
        }
        return await gssp(context, claims); // Continue on to call `getServerSideProps` logic
    }
}

export function checkLogin(gssp) {
    return async (ctx) => {
        const { req, res } = ctx
        let loginRes;
        const token = req.cookies.token
        if (!token) {
            loginRes = 'false'
            return await gssp(ctx, loginRes);
        }
        const claims = jwt.verify(token, process.env.JWT_KEY)
        claims ? (loginRes = 'true') : (loginRes = 'false')
        return await gssp(ctx, loginRes);
    }
}
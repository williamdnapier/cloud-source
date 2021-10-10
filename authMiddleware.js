/*
This authMiddleware.js was written by Adam Freeman. It inspects HTTP requests which are sent to the web service and implements
some basic security features. This is server-side code and is not directly relevant to Vue.js but rather just gives a way
to develop these Vue.js components.
 */

const jwt = require("jsonwebtoken");

const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";

module.exports = function (req, res, next) {

    if ((req.url == "/api/login" || req.url == "/login")
        && req.method == "POST") {
        if (req.body != null && req.body.name == USERNAME
            && req.body.password == PASSWORD) {
            let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
            res.json({ success: true, token: token });
        } else {
            res.json({ success: false });
        }
        res.end();
        return;
    } else if ((((req.url.startsWith("/api/resources")
                || req.url.startsWith("/resources"))
            || (req.url.startsWith("/api/categories")
                || req.url.startsWith("/categories"))) && req.method != "GET")
        || ((req.url.startsWith("/api/orders")
            || req.url.startsWith("/orders")) && req.method != "POST")) {
        let token = req.headers["authorization"];
        if (token != null && token.startsWith("Bearer<")) {
            token = token.substring(7, token.length - 1);
            try {
                jwt.verify(token, APP_SECRET);
                next();
                return;
            } catch (err) { console.log(err) }
        }
        res.statusCode = 401;
        res.end();
        return;
    }
    next();
}
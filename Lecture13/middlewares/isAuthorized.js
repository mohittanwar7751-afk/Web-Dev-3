const isAuthorized = (req, res, next) => {
    let token = req.headers.cookie;

    if(!token || token !== "12345"){
        return res.status(401).send("kon hai bhai tu")
    }
    next();
}



const isLoggedIn = (req, res, next) => {
    let login = false;

    if(!login){
        return res.status(401).send("login kar le bhai")
    }
    next();
}

module.exports = { isAuthorized, isLoggedIn };
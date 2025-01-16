function getlogin(req, res, next){
    res.render("index",{
        title : "Login - Chat Application"
    })
}
export {getlogin}
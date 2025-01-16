function getUsers(req, res, next){
    res.rander =("users", {
        title: "Users - Chat Application"
    })
}

export { getUsers }
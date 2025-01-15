//404 not found handeler
import createHttpError from "http-errors";


function notfoundhandeler(req, res, next){
    next(createHttpError(404, "Your requested content is not found"))

}

//default error handeler
function errorhandeler(err, req, res, next){
    res.render("error",{
        title :"Error page",
    });
}

module.exports = {notfoundhandeler, errorhandeler};

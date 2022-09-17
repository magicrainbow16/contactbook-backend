class ApiError extends Error {
    construcor (statusCode, message){
        super();
        this.statusCode = statusCode;
        this.message = message;

    }
}
module.exports = ApiError;
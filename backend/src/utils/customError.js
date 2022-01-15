class CustomError extends Error { 
    constructor(message,statusCode){
        super(message,statusCode);
        this.statusCode = statusCode
            
    }
}

module.exports  = CustomError
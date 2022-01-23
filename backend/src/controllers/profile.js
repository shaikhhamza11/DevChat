const asyncHandler = require('../middlewares/asyncHandler')
const CustomError = require('../utils/customError')
exports.getProfile = asyncHandler(async (req,res)=>{
    res.send("Profiles");
    
})
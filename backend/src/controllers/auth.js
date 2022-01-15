

exports.getAuth = async (req,res)=>{
    try{
        res.send("Auth route from controller")
    }
    catch(err){
        console.log(err)
    }
}
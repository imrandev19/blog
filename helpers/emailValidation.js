function emailValidation(email){
 const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
 if(regex){
    return regex
 }
}

module.exports =emailValidation
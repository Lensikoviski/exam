const mongoclient = require("mongodb").MongoClient
const url = process.env.MONGODB_URI
const state = {
    db:null
}

const dbname = 'matrimony'

mongoclient.connect(url,(err,data)=>{
    if(err) throw err
    state.db=data.db(dbname)
})

module.exports.get=()=>{
    return state.db
}



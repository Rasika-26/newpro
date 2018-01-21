var mongoClient=require('mongodb').mongoClient;
exports.createconnction=function()
{
  MongoClient.connect("mongodb://Rasikasampath:latha19951998.mlab.com:11138/projector10").then(function)(client)){
    console.log("connect to mongo");
    export.database=client.db("projector10");
  });
}

var movies=(require('./moviedata'));
var dbservice=require('./services/bdservice.js');

exports.getAllMovie=function(req,res,next){
   var db=dbservice.database;
   var moviesColletion=db.collection("movies");
   moviesCollection.find().toarray().then(function(result)
 {
   var outputJSON={
     "isSuccess":true,
     "data":result
   }
  // console.log("Result"+result);//


  return res.json(outputJSON);
});
};
exports.addNewMovie=function(req,res,next){
  var db=dbServer.database,
  movie=req.body,
  moviesCollection=db.collection("movies");
  moviesCollection.insert(movie).then(function(save_data)){
    return res.json({
      "isSuccess":true
    });
  });
}

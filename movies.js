var express=require('express');
var route=express.route();
var moviesController=require('../contolers/movieController.js');
route.get('/all',moviescontroller.getAllmovies);
.post('/add',moviesController.addNewMovie);
res.send('respond eith a resorces');
module.exports=router;

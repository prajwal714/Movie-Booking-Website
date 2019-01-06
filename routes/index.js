const express=require("express"),
	  router=express.Router(),
	  mongoose=require("mongoose"),
	  movies=require("../models/movies");



//=====================================LANDING PAGE==================================================
router.get("/",function(req,res)
	{
		movies.find({},function(err,allmovies)
		{
			if(err)
				console.log(err);
			else
				res.render("home",{movies:allmovies});
		})
		
	});
//=========================  more info about a movie =================================
	router.get("/home/:id",function(req,res)
	{
		movies.findById(req.params.id,function(err,movie)
		{
			if(err)
				console.log(err);
			else
				res.render("movie",{movie:movie});
		});

		
	});

	module.exports=router;
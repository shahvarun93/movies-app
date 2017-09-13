var express=require("express");
var app=express();
var request=require("request");
app.set("view engine","ejs");

app.get("/",function(req,res) {
    res.render("search");
});

var imdb;
app.get("/results1",function(req,res) {
    var iowa=req.query.search;
    // request("http://www.omdbapi.com/?s="+iowa+"&apikey=thewdb",function(error,response,body) {
    //     if(!error && response.statusCode==200) {
    //         var results=JSON.parse(body);
    //         console.log(results);
    //         res.render("results",{data:results});
    //         console.log(results["Search"][0]);
    //         // imdb=results["Search"][0]["imdbID"];
            
    //     }
    // });
    if(iowa==" ") {
        console.log("varun shah");
    }
     request("http://www.omdbapi.com/?t="+iowa+"&apikey=thewdb",function(error,response,body) {
        if(!error && response.statusCode==200) {
            var results=JSON.parse(body);
            res.render("results1",{data:results});
            console.log(results);
        }
     });
});

app.listen(process.env.PORT,process.env.IP,function() {
    console.log("Movie app has started");
});

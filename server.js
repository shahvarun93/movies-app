var express=require("express");
var app=express();
const omdb = require('omdb');
 
omdb.search({
    search: 'game of thrones',  // required 
    type: 'series',             // optionnal  ['series', 'episode', 'movie'] 
    year: '2011',               // optionnal 
    page: '1'                   // optionnal (1 to 100) 
}).then(res => {
    console.log('got response:', res);
}).catch(console.error);
 
omdb.get({
    id: 'tt0944947',            // optionnal (requires imdbid or title) 
    title: 'Game of Thrones',   // optionnal (requires imdbid or title) 
    season: 1,                  // optionnal 
    episode: 1,                 // optionnal 
    type: 'series',             // optionnal ['series', 'episode', 'movie'] 
    plot: 'full',               // optionnal (defaults to 'short') 
    tomatoes: true,             // optionnal (get rotten tomatoes ratings) 
    year: '2011'                // optionnal 
}).then(res => {
    console.log('got response:', res);
}).catch(console.error);

app.listen(process.env.PORT,process.env.IP,function() {
    console.log("Movie app has started");
});